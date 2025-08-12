-- Add category_id to blog_images to categorize images (e.g., Roofing, Other Services)
ALTER TABLE public.blog_images
ADD COLUMN IF NOT EXISTS category_id uuid REFERENCES public.categories(id) ON DELETE SET NULL;

-- Index for faster filtering by category
CREATE INDEX IF NOT EXISTS idx_blog_images_category_id ON public.blog_images (category_id);

-- Storage policies to ensure only admins can upload/update/delete in the 'blog-images' bucket
-- Public can view objects in the blog-images bucket
CREATE POLICY "Gallery public select blog-images"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'blog-images');

-- Admins (authenticated and with admin role) can insert
CREATE POLICY "Gallery admin insert blog-images"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'blog-images'
  AND auth.uid() IN (
    SELECT users.id FROM public.users WHERE users.role = 'admin'
  )
);

-- Admins can update
CREATE POLICY "Gallery admin update blog-images"
ON storage.objects
FOR UPDATE
TO authenticated
USING (
  bucket_id = 'blog-images'
  AND auth.uid() IN (
    SELECT users.id FROM public.users WHERE users.role = 'admin'
  )
)
WITH CHECK (
  bucket_id = 'blog-images'
  AND auth.uid() IN (
    SELECT users.id FROM public.users WHERE users.role = 'admin'
  )
);

-- Admins can delete
CREATE POLICY "Gallery admin delete blog-images"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'blog-images'
  AND auth.uid() IN (
    SELECT users.id FROM public.users WHERE users.role = 'admin'
  )
);
