-- Drop the comments_public view that might be causing the security definer issue
DROP VIEW IF EXISTS public.comments_public;