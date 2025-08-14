-- Fix the infinite recursion issue with a simpler approach

-- 1. Create an enum for roles
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- 2. Create a user_roles table (separate from users to avoid recursion)
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    role app_role NOT NULL DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE (user_id, role)
);

-- 3. Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- 4. Create a security definer function to check roles (avoids recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- 5. Create a simpler admin check function
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT public.has_role(auth.uid(), 'admin'::app_role)
$$;

-- 6. Drop the problematic policies on users table that cause recursion
DROP POLICY IF EXISTS "Admins can manage users" ON users;
DROP POLICY IF EXISTS "Admins can view users" ON users;

-- 7. Create new non-recursive policies for users table
CREATE POLICY "Admins can view users"
ON public.users
FOR SELECT
TO authenticated
USING (public.is_admin());

CREATE POLICY "Admins can manage users"
ON public.users
FOR ALL
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

-- 8. Create policies for user_roles table
CREATE POLICY "Admins can view all user roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.is_admin());

CREATE POLICY "Admins can manage all user roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

-- 9. Create a function to automatically assign admin role to specific emails
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Insert user into public.users table
  INSERT INTO public.users (id, email, full_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
    CASE 
      WHEN NEW.email = 'admin@jonesandsonroofing.uk' THEN 'admin'
      ELSE 'user'
    END
  )
  ON CONFLICT (email) DO UPDATE SET
    full_name = EXCLUDED.full_name,
    updated_at = NOW();

  -- Assign admin role if it's the admin email
  IF NEW.email = 'admin@jonesandsonroofing.uk' THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'admin'::app_role)
    ON CONFLICT (user_id, role) DO NOTHING;
  ELSE
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'user'::app_role)
    ON CONFLICT (user_id, role) DO NOTHING;
  END IF;

  RETURN NEW;
END;
$$;

-- 10. Create trigger to handle new user signups
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 11. Update the blog_posts policies to use the new is_admin function
DROP POLICY IF EXISTS "Admins can delete posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can create posts" ON blog_posts;
DROP POLICY IF EXISTS "Post authors can update their posts" ON blog_posts;

CREATE POLICY "Admins can delete posts"
ON public.blog_posts
FOR DELETE
TO authenticated
USING (public.is_admin());

CREATE POLICY "Admins can create posts"
ON public.blog_posts
FOR INSERT
TO authenticated
WITH CHECK (public.is_admin());

CREATE POLICY "Admins can update posts"
ON public.blog_posts
FOR UPDATE
TO authenticated
USING (public.is_admin());