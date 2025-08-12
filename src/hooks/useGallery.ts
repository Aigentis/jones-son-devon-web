import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface GalleryImage {
  id: string;
  filename: string;
  original_name: string;
  alt_text?: string | null;
  caption?: string | null;
  file_path: string;
  file_size?: number | null;
  mime_type?: string | null;
  uploaded_by?: string | null;
  created_at: string;
  public_url: string;
}

export const useGalleryImages = () => {
  return useQuery({
    queryKey: ["gallery-images"],
    queryFn: async (): Promise<GalleryImage[]> => {
      const { data, error } = await supabase
        .from("blog_images")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      const images: GalleryImage[] = (data || []).map((img: any) => ({
        ...img,
        public_url: supabase.storage.from("blog-images").getPublicUrl(img.file_path).data.publicUrl,
      }));

      return images;
    },
  });
};

export const useUploadImage = () => {
  const queryClient = useQueryClient();

  const upload = async (
    file: File,
    options: {
      filenameBase: string;
      altText?: string;
      caption?: string;
    }
  ) => {
    const ext = file.name.split(".").pop()?.toLowerCase() || "";
    const sanitize = (s: string) => s
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\-\s_]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    const base = sanitize(options.filenameBase || file.name.replace(/\.[^/.]+$/, ""));
    const unique = crypto.randomUUID().slice(0, 8);
    const filename = ext ? `${base}-${unique}.${ext}` : `${base}-${unique}`;
    const filePath = `uploads/${new Date().getFullYear()}/${String(new Date().getMonth() + 1).padStart(2, "0")}/${filename}`;

    const { error: uploadError } = await supabase.storage
      .from("blog-images")
      .upload(filePath, file, { upsert: false, contentType: file.type || undefined });

    if (uploadError) throw uploadError;

    const { error: insertError } = await supabase
      .from("blog_images")
      .insert({
        filename,
        original_name: file.name,
        alt_text: options.altText || null,
        caption: options.caption || null,
        file_path: filePath,
        file_size: file.size,
        mime_type: file.type,
      });

    if (insertError) throw insertError;

    await queryClient.invalidateQueries({ queryKey: ["gallery-images"] });

    return {
      filename,
      filePath,
      url: supabase.storage.from("blog-images").getPublicUrl(filePath).data.publicUrl,
    };
  };

  return { upload };
};
