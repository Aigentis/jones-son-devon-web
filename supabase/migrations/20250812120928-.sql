-- Create storage bucket for blog images
INSERT INTO storage.buckets (id, name, public) VALUES ('blog-images', 'blog-images', true);

-- Create policies for blog image uploads
CREATE POLICY "Anyone can view blog images" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'blog-images');

CREATE POLICY "Admins can upload blog images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'blog-images' AND auth.uid() IN (SELECT id FROM public.users WHERE role = 'admin'));

CREATE POLICY "Admins can update blog images" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'blog-images' AND auth.uid() IN (SELECT id FROM public.users WHERE role = 'admin'));

CREATE POLICY "Admins can delete blog images" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'blog-images' AND auth.uid() IN (SELECT id FROM public.users WHERE role = 'admin'));

-- Create a table to store image metadata
CREATE TABLE public.blog_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  filename TEXT NOT NULL,
  original_name TEXT NOT NULL,
  alt_text TEXT,
  caption TEXT,
  file_path TEXT NOT NULL,
  file_size INTEGER,
  mime_type TEXT,
  uploaded_by UUID REFERENCES public.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on blog_images
ALTER TABLE public.blog_images ENABLE ROW LEVEL SECURITY;

-- Create policies for blog_images
CREATE POLICY "Public can view blog images metadata" 
ON public.blog_images FOR SELECT 
USING (true);

CREATE POLICY "Admins can manage blog images metadata" 
ON public.blog_images FOR ALL 
USING (auth.uid() IN (SELECT id FROM public.users WHERE role = 'admin'));