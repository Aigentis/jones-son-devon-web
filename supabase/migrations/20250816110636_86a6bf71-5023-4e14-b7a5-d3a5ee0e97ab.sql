-- Create jobs table to group multiple images
CREATE TABLE public.jobs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  area TEXT NOT NULL,
  job_type TEXT NOT NULL,
  description TEXT,
  main_image_id UUID,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for jobs table
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;

-- Create policies for jobs
CREATE POLICY "Public can view jobs" 
ON public.jobs 
FOR SELECT 
USING (true);

CREATE POLICY "Admins can manage jobs" 
ON public.jobs 
FOR ALL 
USING (is_admin())
WITH CHECK (is_admin());

-- Add job_id column to blog_images table
ALTER TABLE public.blog_images 
ADD COLUMN job_id UUID REFERENCES public.jobs(id) ON DELETE CASCADE;

-- Create index for better performance
CREATE INDEX idx_blog_images_job_id ON public.blog_images(job_id);

-- Add foreign key constraint for main_image_id
ALTER TABLE public.jobs 
ADD CONSTRAINT fk_jobs_main_image 
FOREIGN KEY (main_image_id) REFERENCES public.blog_images(id) ON DELETE SET NULL;

-- Create trigger for automatic timestamp updates on jobs
CREATE TRIGGER update_jobs_updated_at
BEFORE UPDATE ON public.jobs
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create or replace the update function if it doesn't exist
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;