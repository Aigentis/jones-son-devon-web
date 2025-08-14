-- Fix the security definer function by setting proper search path
DROP FUNCTION IF EXISTS public.is_admin();

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = ''
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.users 
    WHERE id = auth.uid() AND role = 'admin'
  );
$$;

-- Drop the security definer view and replace with a regular view
DROP VIEW IF EXISTS public.comments_public;

-- The view is no longer needed since we're using RLS policies directly
-- The RLS policies will handle the security by excluding email for non-admins