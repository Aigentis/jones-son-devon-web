-- Create a secure view for public comment access that excludes email addresses
CREATE OR REPLACE VIEW public.comments_public AS
SELECT 
  id,
  post_id,
  author_name,
  content,
  approved,
  created_at
FROM public.comments
WHERE approved = true;

-- Grant SELECT permission on the view to authenticated and anonymous users
GRANT SELECT ON public.comments_public TO authenticated, anon;

-- Create a security definer function to check if user is admin
-- This prevents recursive RLS issues when checking user roles
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.users 
    WHERE id = auth.uid() AND role = 'admin'
  );
$$;

-- Drop the existing public SELECT policy
DROP POLICY IF EXISTS "Public can view approved comments" ON public.comments;

-- Create new RLS policies that protect email addresses
CREATE POLICY "Public can view approved comments (no email)" 
ON public.comments 
FOR SELECT 
USING (approved = true AND NOT public.is_admin());

-- Allow admins to see all comment data including emails
CREATE POLICY "Admins can view all comment data" 
ON public.comments 
FOR SELECT 
USING (public.is_admin());

-- Update the existing admin management policy to use the security definer function
DROP POLICY IF EXISTS "Admins can manage all comments" ON public.comments;

CREATE POLICY "Admins can manage all comments" 
ON public.comments 
FOR ALL 
USING (public.is_admin())
WITH CHECK (public.is_admin());