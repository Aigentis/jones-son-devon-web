-- Create role enum and user_roles table for admin control
DO $$ BEGIN
  CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Basic RLS: users can view their own roles
DO $$ BEGIN
  CREATE POLICY "Users can view their roles" ON public.user_roles
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles ur
    WHERE ur.user_id = _user_id AND ur.role = _role
  );
$$;

-- Categories for gallery
CREATE TABLE IF NOT EXISTS public.categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Seed default categories
INSERT INTO public.categories (name) VALUES ('Roofing') ON CONFLICT (name) DO NOTHING;
INSERT INTO public.categories (name) VALUES ('Other Services') ON CONFLICT (name) DO NOTHING;

-- Ensure blog_images has category_id and RLS
ALTER TABLE public.blog_images
  ADD COLUMN IF NOT EXISTS category_id uuid NULL REFERENCES public.categories(id) ON DELETE SET NULL;

ALTER TABLE public.blog_images ENABLE ROW LEVEL SECURITY;

-- Allow public reads of images
DO $$ BEGIN
  CREATE POLICY "Public can view gallery images" ON public.blog_images
  FOR SELECT TO public
  USING (true);
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- Only admins can modify images metadata
DO $$ BEGIN
  CREATE POLICY "Admins can insert images" ON public.blog_images
  FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE POLICY "Admins can update images" ON public.blog_images
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE POLICY "Admins can delete images" ON public.blog_images
  FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- Ensure storage bucket exists and set storage policies
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', true)
ON CONFLICT (id) DO NOTHING;

-- Clean up any previous gallery policies to avoid conflicts
DO $$ BEGIN
  EXECUTE 'DROP POLICY IF EXISTS "Gallery public select blog-images" ON storage.objects';
  EXECUTE 'DROP POLICY IF EXISTS "Gallery admin insert blog-images" ON storage.objects';
  EXECUTE 'DROP POLICY IF EXISTS "Gallery admin update blog-images" ON storage.objects';
  EXECUTE 'DROP POLICY IF EXISTS "Gallery admin delete blog-images" ON storage.objects';
EXCEPTION WHEN others THEN NULL; END $$;

-- Public can view images in the bucket
CREATE POLICY "Gallery public select blog-images"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'blog-images');

-- Only admins can modify objects in the bucket
CREATE POLICY "Gallery admin insert blog-images"
ON storage.objects
FOR INSERT TO authenticated
WITH CHECK (
  bucket_id = 'blog-images' AND public.has_role(auth.uid(), 'admin')
);

CREATE POLICY "Gallery admin update blog-images"
ON storage.objects
FOR UPDATE TO authenticated
USING (
  bucket_id = 'blog-images' AND public.has_role(auth.uid(), 'admin')
)
WITH CHECK (
  bucket_id = 'blog-images' AND public.has_role(auth.uid(), 'admin')
);

CREATE POLICY "Gallery admin delete blog-images"
ON storage.objects
FOR DELETE TO authenticated
USING (
  bucket_id = 'blog-images' AND public.has_role(auth.uid(), 'admin')
);

-- Helpful index for category filtering
CREATE INDEX IF NOT EXISTS idx_blog_images_category_id ON public.blog_images (category_id);
