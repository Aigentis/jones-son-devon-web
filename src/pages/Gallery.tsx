import { useEffect, useMemo, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useJobs, useUploadJob, useEditJob, useCategories } from "@/hooks/useGallery";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/contexts/AuthContext";
import { Textarea } from "@/components/ui/textarea";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Trash2, Edit, Plus } from "lucide-react";

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
  const { data: categories = [] } = useCategories();
  const { uploadJob } = useUploadJob();
  const { updateJob, addImagesToJob, removeImageFromJob } = useEditJob();
  const { toast } = useToast();
  const { user } = useAuth();

  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [title, setTitle] = useState("");
  const [area, setArea] = useState("");
  const [jobType, setJobType] = useState("");
  const [description, setDescription] = useState("");
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [categoryId, setCategoryId] = useState("none");
  const [search, setSearch] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Edit modal states
  const [editOpen, setEditOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<any>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editArea, setEditArea] = useState("");
  const [editJobType, setEditJobType] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editMainImageId, setEditMainImageId] = useState("");
  const [editCategoryId, setEditCategoryId] = useState("none");
  const [newFiles, setNewFiles] = useState<File[]>([]);
  const [isUpdating, setIsUpdating] = useState(false);

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
        mainImageIndex,
        categoryId: categoryId === "none" ? undefined : categoryId
      });
      toast({ title: "Job uploaded successfully", description: `${result.images.length} images uploaded for ${title}` });
      setOpen(false);
      setFiles([]);
      setTitle("");
      setArea("");
      setJobType("");
      setDescription("");
      setCategoryId("none");
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

  const openEditModal = (job: any) => {
    setEditingJob(job);
    setEditTitle(job.title);
    setEditArea(job.area);
    setEditJobType(job.job_type);
    setEditDescription(job.description || "");
    setEditMainImageId(job.main_image_id || (job.images && job.images.length > 0 ? job.images[0].id : ""));
    setEditCategoryId(job.category_id || "none");
    setNewFiles([]);
    setEditOpen(true);
  };

  const handleEditSubmit = async () => {
    if (!editingJob) return;

    if (!editTitle || !editArea || !editJobType) {
      toast({ title: "Missing information", description: "Please fill in title, area, and job type." });
      return;
    }

    setIsUpdating(true);
    try {
      // Update job details
      console.log("Updating job with main_image_id:", editMainImageId);
      await updateJob(editingJob.id, {
        title: editTitle,
        area: editArea,
        job_type: editJobType,
        description: editDescription || undefined,
        main_image_id: editMainImageId,
        category_id: editCategoryId === "none" ? undefined : editCategoryId,
      });

      console.log("Job updated successfully with main image:", editMainImageId);

      // Add new images if any
      if (newFiles.length > 0) {
        await addImagesToJob(editingJob.id, newFiles, {
          title: editTitle,
          area: editArea,
          job_type: editJobType,
        });
      }

      toast({ title: "Job updated successfully", description: `${editTitle} has been updated` });
      setEditOpen(false);
      setEditingJob(null);
      setNewFiles([]);
    } catch (e: any) {
      const message = e?.message || "Update failed. Admin login required.";
      toast({ title: "Update failed", description: message });
    } finally {
      setIsUpdating(false);
    }
  };

  const handleRemoveImage = async (imageId: string, filePath: string) => {
    if (!editingJob) return;

    try {
      await removeImageFromJob(imageId, filePath);
      toast({ title: "Image removed", description: "Image has been deleted successfully" });
      
      // If the removed image was the main image, clear the main image selection
      if (editMainImageId === imageId) {
        setEditMainImageId("");
      }
    } catch (e: any) {
      const message = e?.message || "Failed to remove image";
      toast({ title: "Remove failed", description: message });
    }
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
                      <Label htmlFor="category">Category (Optional)</Label>
                      <Select value={categoryId} onValueChange={setCategoryId}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">No Category</SelectItem>
                          {categories.map(category => (
                            <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
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
                    <div className="flex gap-2 items-center">
                      <Badge variant="secondary">{job.area}</Badge>
                      <Badge variant="outline">{job.job_type}</Badge>
                      {user && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => openEditModal(job)}
                          className="h-7 w-7 p-0"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardTitle>
                  {job.description && (
                    <p className="text-sm text-muted-foreground">{job.description}</p>
                  )}
                </CardHeader>
                <CardContent className="p-0">
                  {job.main_image && (
                    <div className="relative group">
                      <img
                        src={job.main_image.public_url}
                        alt={job.main_image.alt_text || job.title}
                        loading="lazy"
                        className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(job, 0)}
                      />
                      <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                        Main Image
                      </div>
                    </div>
                  )}
                  {job.images && job.images.length > 1 && (
                    <div className="p-4">
                      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent">
                        {job.images.map((img, index) => (
                          <div key={img.id} className="relative group flex-shrink-0">
                            <img
                              src={img.public_url}
                              alt={img.alt_text || `${job.title} - Image ${index + 1}`}
                              loading="lazy"
                              className={`w-20 h-20 object-cover rounded cursor-pointer hover:opacity-75 transition-opacity ${
                                img.id === job.main_image_id ? 'ring-2 ring-primary' : ''
                              }`}
                              onClick={() => openLightbox(job, index)}
                            />
                            {img.id === job.main_image_id && (
                              <div className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                ★
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Scroll to see all {job.images.length} images • Click to view larger
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Edit Job Modal */}
          <Dialog open={editOpen} onOpenChange={setEditOpen}>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Edit Job</DialogTitle>
              </DialogHeader>
              {editingJob && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="editTitle">Job Title</Label>
                      <Input
                        id="editTitle"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="editArea">Area</Label>
                      <Select value={editArea} onValueChange={setEditArea}>
                        <SelectTrigger>
                          <SelectValue />
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
                    <Label htmlFor="editJobType">Job Type</Label>
                    <Select value={editJobType} onValueChange={setEditJobType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {jobTypes.map(type => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="editCategory">Category</Label>
                    <Select value={editCategoryId} onValueChange={setEditCategoryId}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No Category</SelectItem>
                        {categories.map(category => (
                          <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="editDescription">Description</Label>
                    <Textarea
                      id="editDescription"
                      value={editDescription}
                      onChange={(e) => setEditDescription(e.target.value)}
                      rows={3}
                    />
                  </div>

                  {/* Current Images */}
                  {editingJob.images && editingJob.images.length > 0 && (
                    <div className="space-y-3">
                      <Label>Current Images ({editingJob.images.length})</Label>
                      <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent">
                        {editingJob.images.map((img: any) => (
                          <div key={img.id} className="relative group flex-shrink-0">
                            <img
                              src={img.public_url}
                              alt={img.alt_text}
                              className={`w-28 h-28 object-cover rounded border-2 transition-all ${
                                editMainImageId === img.id 
                                  ? 'border-primary ring-2 ring-primary/20' 
                                  : 'border-border hover:border-primary/50'
                              }`}
                            />
                            {editMainImageId === img.id && (
                              <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                                ★
                              </div>
                            )}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded flex flex-col items-center justify-center gap-1">
                              <Button
                                size="sm"
                                variant={editMainImageId === img.id ? "default" : "secondary"}
                                onClick={() => {
                                  console.log("Setting main image to:", img.id);
                                  setEditMainImageId(img.id);
                                  toast({ 
                                    title: "Main image selected", 
                                    description: `This image will be set as the main image when you save.` 
                                  });
                                }}
                                className="h-7 text-xs px-2"
                              >
                                {editMainImageId === img.id ? "★ Main" : "Set Main"}
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handleRemoveImage(img.id, img.file_path)}
                                className="h-7 w-7 p-0"
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Scroll horizontally to see all images • Click "Set Main" to choose the main image • Main image shows first in gallery
                      </p>
                    </div>
                  )}

                  {/* Add New Images */}
                  <div className="space-y-2">
                    <Label htmlFor="newFiles">Add New Images</Label>
                    <Input
                      id="newFiles"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => setNewFiles(Array.from(e.target.files || []))}
                    />
                    {newFiles.length > 0 && (
                      <p className="text-sm text-muted-foreground">
                        {newFiles.length} new image(s) selected
                      </p>
                    )}
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <Button variant="outline" onClick={() => setEditOpen(false)}>Cancel</Button>
                    <Button onClick={handleEditSubmit} disabled={isUpdating}>
                      {isUpdating ? "Updating..." : "Update Job"}
                    </Button>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>

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
