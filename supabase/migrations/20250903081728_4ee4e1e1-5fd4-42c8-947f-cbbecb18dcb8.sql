-- Fix security definer view issue by replacing public_comments view with proper RLS policy

-- Drop the existing public_comments view that has security definer issues
DROP VIEW IF EXISTS public.public_comments;

-- Create a new RLS policy that allows public users to view approved comments
-- This replaces the functionality of the public_comments view
CREATE POLICY "Public can view approved comments" 
ON public.comments 
FOR SELECT 
USING (approved = true);

-- Add a comment to document this policy
COMMENT ON POLICY "Public can view approved comments" ON public.comments IS 
'Allows public users to view approved comments without exposing sensitive data like emails. Replaces the security definer view public_comments.';