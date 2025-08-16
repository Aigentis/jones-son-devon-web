import { useEffect, useMemo, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useJobs, useUploadJob } from "@/hooks/useGallery";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/contexts/AuthContext";
import { Textarea } from "@/components/ui/textarea";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

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
  const { data: jobs = [], isLoading, error } = useJobs();
  const { uploadJob } = useUploadJob();
  const { toast } = useToast();
  const { user } = useAuth();

  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [title, setTitle] = useState("");
  const [area, setArea] = useState("");
  const [jobType, setJobType] = useState("");
  const [description, setDescription] = useState("");
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [search, setSearch] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const title = "Job Gallery | Jones & Son Property Maintenance";
    document.title = title;
    setMeta("description", "Gallery of our completed roofing and property maintenance projects in North Devon.");
    setCanonical(window.location.origin + "/gallery");
  }, []);

const filteredJobs = useMemo(() => {
  const q = search.toLowerCase().trim();
  return jobs.filter((job) => {
    const matchesText = !q || [job.title, job.area, job.job_type, job.description ?? ""].some((v) =>
      v.toLowerCase().includes(q)
    );
    return matchesText;
  });
}, [jobs, search]);

const areas = ["Barnstaple", "Bideford", "Braunton", "Fremington", "Great Torrington", "Ilfracombe", "South Molton"];
const jobTypes = ["Roof Replacement", "Roof Repair", "Guttering", "Fascias & Soffits", "Flat Roofs", "Roof Cleaning", "Dry Verge Systems", "Cladding"];

  const handleSubmit = async () => {
    if (files.length === 0) {
      toast({ title: "No files selected", description: "Please choose at least one image to upload." });
      return;
    }

    if (!title || !area || !jobType) {
      toast({ title: "Missing information", description: "Please fill in title, area, and job type." });
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await uploadJob(files, { 
        title, 
        area, 
        job_type: jobType, 
        description: description || undefined,
        mainImageIndex 
      });
      toast({ title: "Job uploaded successfully", description: `${result.images.length} images uploaded for ${title}` });
      setOpen(false);
      setFiles([]);
      setTitle("");
      setArea("");
      setJobType("");
      setDescription("");
      setMainImageIndex(0);
    } catch (e: any) {
      const message = e?.message || "Upload failed. Admin login required to upload.";
      toast({ title: "Upload failed", description: message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openLightbox = (job: any, imageIndex: number) => {
    setSelectedJob(job);
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-10">
          <header className="mb-6">
            <h1 className="text-3xl font-bold">Job Gallery</h1>
            <p className="text-muted-foreground mt-1">Browse our completed roofing and property maintenance projects. Public can view; uploads are admin-only.</p>
          </header>

          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between mb-6">
            <div className="w-full sm:max-w-xs">
              <Input
                placeholder="Search jobs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search jobs"
              />
            </div>
            {user && (
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button>Upload Job</Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Upload New Job</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Job Title</Label>
                        <Input
                          id="title"
                          placeholder="e.g. Roof Replacement - Victorian House"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="area">Area</Label>
                        <Select value={area} onValueChange={setArea}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select area" />
                          </SelectTrigger>
                          <SelectContent>
                            {areas.map(areaOption => (
                              <SelectItem key={areaOption} value={areaOption}>{areaOption}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jobType">Job Type</Label>
                      <Select value={jobType} onValueChange={setJobType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select job type" />
                        </SelectTrigger>
                        <SelectContent>
                          {jobTypes.map(type => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Brief description of the work completed..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="files">Images (multiple allowed)</Label>
                      <Input
                        id="files"
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e) => setFiles(Array.from(e.target.files || []))}
                      />
                      <p className="text-xs text-muted-foreground">Select multiple images. First image will be the main image by default.</p>
                    </div>
                    {files.length > 0 && (
                      <div className="space-y-2">
                        <Label>Main Image (will be displayed prominently)</Label>
                        <Select value={mainImageIndex.toString()} onValueChange={(v) => setMainImageIndex(parseInt(v))}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {files.map((file, index) => (
                              <SelectItem key={index} value={index.toString()}>
                                {file.name} {index === 0 ? "(default)" : ""}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                    <div className="flex justify-end gap-2 pt-2">
                      <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                      <Button onClick={handleSubmit} disabled={isSubmitting}>{isSubmitting ? "Uploading..." : "Upload Job"}</Button>
                    </div>
                    <p className="text-xs text-muted-foreground">Note: Uploads require admin login due to security policies.</p>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>

          {isLoading && <p>Loading jobs...</p>}
          {error && <p>Failed to load jobs.</p>}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{job.title}</span>
                    <div className="flex gap-2">
                      <Badge variant="secondary">{job.area}</Badge>
                      <Badge variant="outline">{job.job_type}</Badge>
                    </div>
                  </CardTitle>
                  {job.description && (
                    <p className="text-sm text-muted-foreground">{job.description}</p>
                  )}
                </CardHeader>
                <CardContent className="p-0">
                  {job.main_image && (
                    <div className="relative">
                      <img
                        src={job.main_image.public_url}
                        alt={job.main_image.alt_text || job.title}
                        loading="lazy"
                        className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(job, 0)}
                      />
                      <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                        Main Image
                      </div>
                    </div>
                  )}
                  {job.images && job.images.length > 1 && (
                    <div className="p-4">
                      <p className="text-sm font-medium mb-2">Additional Images ({job.images.length - 1})</p>
                      <div className="grid grid-cols-4 gap-2">
                        {job.images
                          .filter(img => img.id !== job.main_image_id)
                          .slice(0, 4)
                          .map((img, index) => (
                            <img
                              key={img.id}
                              src={img.public_url}
                              alt={img.alt_text || `${job.title} - Image ${index + 2}`}
                              loading="lazy"
                              className="w-full h-16 object-cover rounded cursor-pointer hover:opacity-75 transition-opacity"
                              onClick={() => openLightbox(job, job.images!.findIndex(i => i.id === img.id))}
                            />
                          ))
                        }
                        {job.images.length > 5 && (
                          <div 
                            className="w-full h-16 bg-muted rounded flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors"
                            onClick={() => openLightbox(job, 0)}
                          >
                            <span className="text-xs font-medium">+{job.images.length - 5}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Lightbox Modal */}
          <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
            <DialogContent className="max-w-4xl max-h-[90vh] p-2">
              <DialogHeader className="px-4 py-2">
                <DialogTitle>{selectedJob?.title}</DialogTitle>
              </DialogHeader>
              {selectedJob && selectedJob.images && (
                <div className="flex-1 min-h-0">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {selectedJob.images.map((img, index) => (
                        <CarouselItem key={img.id}>
                          <div className="flex flex-col items-center space-y-2">
                            <img
                              src={img.public_url}
                              alt={img.alt_text || `${selectedJob.title} - Image ${index + 1}`}
                              className="max-w-full max-h-[60vh] object-contain rounded"
                            />
                            <div className="text-center px-4">
                              <p className="text-sm text-muted-foreground">
                                Image {index + 1} of {selectedJob.images!.length}
                                {img.id === selectedJob.main_image_id && " (Main Image)"}
                              </p>
                              {img.caption && (
                                <p className="text-sm mt-1">{img.caption}</p>
                              )}
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </section>
      </main>
      <Footer />
    </div>
  );
}
