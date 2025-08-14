-- Grant admin role to kelvincushman@gmail.com
-- First, find the user ID from auth.users and insert into public tables

-- Insert user into public.users if not exists
INSERT INTO public.users (id, email, full_name, role)
SELECT 
  au.id,
  au.email,
  COALESCE(au.raw_user_meta_data->>'full_name', au.email),
  'admin'
FROM auth.users au
WHERE au.email = 'kelvincushman@gmail.com'
ON CONFLICT (email) DO UPDATE SET
  role = 'admin',
  updated_at = NOW();

-- Grant admin role in user_roles table
INSERT INTO public.user_roles (user_id, role)
SELECT 
  au.id,
  'admin'::app_role
FROM auth.users au
WHERE au.email = 'kelvincushman@gmail.com'
ON CONFLICT (user_id, role) DO NOTHING;