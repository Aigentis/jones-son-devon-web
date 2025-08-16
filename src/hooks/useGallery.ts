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
  category_id?: string | null;
  job_id?: string | null;
  created_at: string;
  public_url: string;
}

export interface Job {
  id: string;
  title: string;
  area: string;
  job_type: string;
  description?: string | null;
  main_image_id?: string | null;
  created_at: string;
  updated_at: string;
  main_image?: GalleryImage | null;
  images?: GalleryImage[];
}

export interface Category {
  id: string;
  name: string;
  slug?: string | null;
}

export const useJobs = () => {
  return useQuery({
    queryKey: ["gallery-jobs"],
    queryFn: async (): Promise<Job[]> => {
      // First get all jobs
      const { data: jobsData, error: jobsError } = await supabase
        .from("jobs")
        .select("*")
        .order("created_at", { ascending: false });

      if (jobsError) throw jobsError;

      if (!jobsData || jobsData.length === 0) {
        return [];
      }

      // Get all images related to these jobs
      const jobIds = jobsData.map(job => job.id);
      const { data: imagesData, error: imagesError } = await supabase
        .from("blog_images")
        .select("*")
        .in("job_id", jobIds);

      if (imagesError) throw imagesError;

      // Group images by job_id
      const imagesByJobId = (imagesData || []).reduce((acc, img) => {
        if (!acc[img.job_id]) acc[img.job_id] = [];
        acc[img.job_id].push({
          ...img,
          public_url: supabase.storage.from("blog-images").getPublicUrl(img.file_path).data.publicUrl,
        });
        return acc;
      }, {} as Record<string, GalleryImage[]>);

      // Combine jobs with their images
      const jobs: Job[] = jobsData.map((job: any) => {
        const jobImages = imagesByJobId[job.id] || [];
        const mainImage = job.main_image_id 
          ? jobImages.find(img => img.id === job.main_image_id) || null
          : null;

        return {
          ...job,
          main_image: mainImage,
          images: jobImages,
        };
      });

      return jobs;
    },
  });
};

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

export const useCategories = () => {
  return useQuery({
    queryKey: ["gallery-categories"],
    queryFn: async (): Promise<Category[]> => {
      const { data, error } = await supabase.from("categories").select("id, name, slug").order("name");
      if (error) throw error;
      return (data as any) || [];
    },
  });
};

export const useUploadJob = () => {
  const queryClient = useQueryClient();

  const uploadJob = async (
    files: File[],
    jobData: {
      title: string;
      area: string;
      job_type: string;
      description?: string;
      mainImageIndex: number;
    }
  ) => {
    if (files.length === 0) throw new Error("No files provided");

    const sanitize = (s: string) => s
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\-\s_]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    // Create job first
    const { data: job, error: jobError } = await supabase
      .from("jobs")
      .insert({
        title: jobData.title,
        area: jobData.area,
        job_type: jobData.job_type,
        description: jobData.description || null,
      })
      .select()
      .single();

    if (jobError) throw jobError;

    // Upload all images
    const uploadedImages = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const ext = file.name.split(".").pop()?.toLowerCase() || "";
      const base = sanitize(`${jobData.area}-${jobData.job_type}-${i + 1}`);
      const unique = crypto.randomUUID().slice(0, 8);
      const filename = ext ? `${base}-${unique}.${ext}` : `${base}-${unique}`;
      const filePath = `uploads/${new Date().getFullYear()}/${String(new Date().getMonth() + 1).padStart(2, "0")}/${filename}`;

      const { error: uploadError } = await supabase.storage
        .from("blog-images")
        .upload(filePath, file, { upsert: false, contentType: file.type || undefined });

      if (uploadError) throw uploadError;

      const { data: imageData, error: insertError } = await supabase
        .from("blog_images")
        .insert({
          filename,
          original_name: file.name,
          alt_text: `${jobData.title} - Image ${i + 1}`,
          caption: i === jobData.mainImageIndex ? "Main Image" : null,
          file_path: filePath,
          file_size: file.size,
          mime_type: file.type,
          job_id: job.id,
        })
        .select()
        .single();

      if (insertError) throw insertError;
      uploadedImages.push(imageData);
    }

    // Set main image
    if (uploadedImages[jobData.mainImageIndex]) {
      const { error: updateError } = await supabase
        .from("jobs")
        .update({ main_image_id: uploadedImages[jobData.mainImageIndex].id })
        .eq("id", job.id);

      if (updateError) throw updateError;
    }

    await queryClient.invalidateQueries({ queryKey: ["gallery-jobs"] });

    return {
      job,
      images: uploadedImages,
    };
  };

  return { uploadJob };
};

export const useUploadImage = () => {
  const queryClient = useQueryClient();

  const upload = async (
    file: File,
    options: {
      filenameBase: string;
      altText?: string;
      caption?: string;
      categoryId?: string | null;
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
        category_id: options.categoryId || null,
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

export const useEditJob = () => {
  const queryClient = useQueryClient();

  const updateJob = async (
    jobId: string,
    updates: {
      title?: string;
      area?: string;
      job_type?: string;
      description?: string;
      main_image_id?: string;
    }
  ) => {
    const { error } = await supabase
      .from("jobs")
      .update(updates)
      .eq("id", jobId);

    if (error) throw error;

    await queryClient.invalidateQueries({ queryKey: ["gallery-jobs"] });
  };

  const addImagesToJob = async (
    jobId: string,
    files: File[],
    jobData: { title: string; area: string; job_type: string }
  ) => {
    if (files.length === 0) throw new Error("No files provided");

    const sanitize = (s: string) => s
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\-\s_]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    const uploadedImages = [];
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const ext = file.name.split(".").pop()?.toLowerCase() || "";
      const base = sanitize(`${jobData.area}-${jobData.job_type}-${Date.now()}-${i + 1}`);
      const unique = crypto.randomUUID().slice(0, 8);
      const filename = ext ? `${base}-${unique}.${ext}` : `${base}-${unique}`;
      const filePath = `uploads/${new Date().getFullYear()}/${String(new Date().getMonth() + 1).padStart(2, "0")}/${filename}`;

      const { error: uploadError } = await supabase.storage
        .from("blog-images")
        .upload(filePath, file, { upsert: false, contentType: file.type || undefined });

      if (uploadError) throw uploadError;

      const { data: imageData, error: insertError } = await supabase
        .from("blog_images")
        .insert({
          filename,
          original_name: file.name,
          alt_text: `${jobData.title} - Image ${i + 1}`,
          file_path: filePath,
          file_size: file.size,
          mime_type: file.type,
          job_id: jobId,
        })
        .select()
        .single();

      if (insertError) throw insertError;
      uploadedImages.push(imageData);
    }

    await queryClient.invalidateQueries({ queryKey: ["gallery-jobs"] });
    return uploadedImages;
  };

  const removeImageFromJob = async (imageId: string, filePath: string) => {
    // Remove from storage
    const { error: storageError } = await supabase.storage
      .from("blog-images")
      .remove([filePath]);

    if (storageError) throw storageError;

    // Remove from database
    const { error: dbError } = await supabase
      .from("blog_images")
      .delete()
      .eq("id", imageId);

    if (dbError) throw dbError;

    await queryClient.invalidateQueries({ queryKey: ["gallery-jobs"] });
  };

  return { updateJob, addImagesToJob, removeImageFromJob };
};
