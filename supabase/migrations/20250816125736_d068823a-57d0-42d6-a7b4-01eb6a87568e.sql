-- Add category_id column to jobs table
ALTER TABLE public.jobs ADD COLUMN category_id UUID REFERENCES public.categories(id);