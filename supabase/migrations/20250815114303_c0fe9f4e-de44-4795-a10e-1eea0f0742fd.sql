-- Create a secure view for public comments that excludes email addresses
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

-- Grant SELECT access to the view for anonymous users
GRANT SELECT ON public.public_comments TO anon;
GRANT SELECT ON public.public_comments TO authenticated;

-- Update the existing RLS policy to be more restrictive
-- First drop the existing policy
DROP POLICY "Public can view approved comments (no email)" ON public.comments;

-- Create a new policy that only allows admins to see email addresses
CREATE POLICY "Only admins can view comment data with emails" 
ON public.comments 
FOR SELECT 
USING (is_admin());

-- Create a policy for public access through the view (this won't directly affect the table but documents intent)
CREATE POLICY "Public view policy documentation" 
ON public.comments 
FOR SELECT 
USING (false); -- This ensures no direct public access to the table

-- Add a comment to document the security approach
COMMENT ON VIEW public.public_comments IS 'Secure view for public comment access - excludes email addresses to prevent harvesting';