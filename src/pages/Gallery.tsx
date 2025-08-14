import { useEffect, useMemo, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useCategories, useGalleryImages, useUploadImage } from "@/hooks/useGallery";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/contexts/AuthContext";

const setMeta = (name: string, content: string) => {
  let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const setCanonical = (href: string) => {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
};

export default function Gallery() {
  const { data: images = [], isLoading, error } = useGalleryImages();
  const { upload } = useUploadImage();
  const { data: categories = [] } = useCategories();
  const { toast } = useToast();
  const { user } = useAuth();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [filenameBase, setFilenameBase] = useState("");
  const [altText, setAltText] = useState("");
  const [caption, setCaption] = useState("");
  const [search, setSearch] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [filterCategory, setFilterCategory] = useState<string>("");

  useEffect(() => {
    const title = "Image Gallery | Jones & Son Property Maintenance";
    document.title = title;
    setMeta("description", "Image gallery of our roofing and property maintenance projects in North Devon.");
    setCanonical(window.location.origin + "/gallery");
  }, []);

const filtered = useMemo(() => {
  const q = search.toLowerCase().trim();
  return images.filter((img) => {
    const matchesText = !q || [img.filename, img.original_name, img.alt_text ?? "", img.caption ?? ""].some((v) =>
      v.toLowerCase().includes(q)
    );
    const matchesCat = !filterCategory || img.category_id === filterCategory;
    return matchesText && matchesCat;
  });
}, [images, search, filterCategory]);

  const handleSubmit = async () => {
    if (!file) {
      toast({ title: "No file selected", description: "Please choose an image to upload." });
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await upload(file, { filenameBase: filenameBase || file.name, altText, caption });
      toast({ title: "Upload successful", description: result.filename });
      setOpen(false);
      setFile(null);
      setFilenameBase("");
      setAltText("");
      setCaption("");
    } catch (e: any) {
      const message = e?.message || "Upload failed. Admin login required to upload.";
      toast({ title: "Upload failed", description: message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-10">
          <header className="mb-6">
            <h1 className="text-3xl font-bold">Image Gallery</h1>
            <p className="text-muted-foreground mt-1">Browse our latest project photos. Public can view; uploads are admin-only.</p>
          </header>

          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between mb-6">
            <div className="w-full sm:max-w-xs">
              <Input
                placeholder="Search images..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search images"
              />
            </div>
            {user && (
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button>Upload Image</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Upload Image</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="file">Image file</Label>
                      <Input
                        id="file"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name">Filename (no extension)</Label>
                      <Input
                        id="name"
                        placeholder="e.g. barnstaple-roof-replacement"
                        value={filenameBase}
                        onChange={(e) => setFilenameBase(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="alt">Alt text</Label>
                      <Input
                        id="alt"
                        placeholder="Describe the image for accessibility and SEO"
                        value={altText}
                        onChange={(e) => setAltText(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="caption">Caption (optional)</Label>
                      <Input
                        id="caption"
                        placeholder="Short caption to show under the image"
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                      />
                    </div>
                    <div className="flex justify-end gap-2 pt-2">
                      <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                      <Button onClick={handleSubmit} disabled={isSubmitting}>{isSubmitting ? "Uploading..." : "Upload"}</Button>
                    </div>
                    <p className="text-xs text-muted-foreground">Note: Uploads require admin login due to security policies.</p>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>

          {isLoading && <p>Loading images...</p>}
          {error && <p>Failed to load images.</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((img) => (
              <Card key={img.id} className="overflow-hidden">
                <CardHeader className="py-3">
                  <CardTitle className="text-base break-all">{img.filename}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <img
                    src={img.public_url}
                    alt={img.alt_text || img.filename}
                    loading="lazy"
                    className="w-full h-64 object-cover"
                  />
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-1">
                  {img.caption && <p className="text-sm">{img.caption}</p>}
                  <a
                    href={img.public_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary underline"
                    aria-label={`Open ${img.filename} in new tab`}
                  >
                    View full image
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
