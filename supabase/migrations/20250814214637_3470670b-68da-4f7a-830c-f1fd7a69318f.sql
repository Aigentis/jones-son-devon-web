-- Create an admin user entry (you'll need to sign up with this email)
INSERT INTO users (email, role, full_name) VALUES 
('admin@jonesandsonroofing.uk', 'admin', 'Admin User')
ON CONFLICT (email) DO UPDATE SET role = 'admin';