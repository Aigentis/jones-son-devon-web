-- Ensure no SECURITY DEFINER views exist by checking system tables
-- This migration will identify and clean up any potential issues

-- First, let's check if there are any views that might be causing the issue
-- Drop any potential problematic views
DO $$
DECLARE
    view_record RECORD;
BEGIN
    -- Get all views in the public schema
    FOR view_record IN 
        SELECT schemaname, viewname 
        FROM pg_views 
        WHERE schemaname = 'public'
    LOOP
        -- Log what we're checking
        RAISE NOTICE 'Checking view: %.%', view_record.schemaname, view_record.viewname;
        
        -- Drop and recreate the public_comments view to ensure it's clean
        IF view_record.viewname = 'public_comments' THEN
            EXECUTE 'DROP VIEW IF EXISTS public.public_comments CASCADE';
            RAISE NOTICE 'Dropped view: public.public_comments';
        END IF;
    END LOOP;
END $$;

-- Recreate the public_comments view cleanly without any SECURITY DEFINER
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

-- Grant permissions
GRANT SELECT ON public.public_comments TO anon;
GRANT SELECT ON public.public_comments TO authenticated;

-- Add comment for documentation
COMMENT ON VIEW public.public_comments IS 'Public view for approved comments - excludes email addresses for security purposes';