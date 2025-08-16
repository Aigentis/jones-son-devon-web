-- Fix Security Definer View issue by recreating the view cleanly
-- Drop and recreate the public_comments view to ensure no SECURITY DEFINER properties

DROP VIEW IF EXISTS public.public_comments;

-- Create the view without any SECURITY DEFINER properties
CREATE VIEW public.public_comments AS
SELECT 
  id,
  post_id,
  author_name,
  content,
  created_at,
  approved
FROM public.comments
WHERE approved = true;

-- Grant appropriate permissions
GRANT SELECT ON public.public_comments TO anon;
GRANT SELECT ON public.public_comments TO authenticated;

-- Add documentation comment
COMMENT ON VIEW public.public_comments IS 'Public view for approved comments - excludes email addresses for security';