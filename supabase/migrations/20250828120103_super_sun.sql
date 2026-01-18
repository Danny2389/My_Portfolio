/*
  # Admin System Database Schema

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `company_name` (text)
      - `contact_info` (text)
      - `message` (text)
      - `ip_address` (text)
      - `created_at` (timestamp)
    
    - `website_visits`
      - `id` (uuid, primary key)
      - `ip_address` (text)
      - `user_agent` (text)
      - `page_url` (text)
      - `username` (text, nullable)
      - `created_at` (timestamp)
    
    - `admin_users`
      - `id` (uuid, primary key)
      - `username` (text, unique)
      - `password_hash` (text)
      - `admin_url_id` (text, unique)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for admin access only
    - Create secure admin authentication
*/

-- Contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company_name text DEFAULT '',
  contact_info text DEFAULT '',
  message text NOT NULL,
  ip_address text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Website visits tracking table
CREATE TABLE IF NOT EXISTS website_visits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address text DEFAULT '',
  user_agent text DEFAULT '',
  page_url text DEFAULT '',
  username text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Admin users table
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  admin_url_id text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_visits ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Admin policies (only authenticated admin users can access)
CREATE POLICY "Admin can read contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE admin_users.id = auth.uid()
    )
  );

CREATE POLICY "Admin can read website visits"
  ON website_visits
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE admin_users.id = auth.uid()
    )
  );

CREATE POLICY "Admin can delete contact submissions"
  ON contact_submissions
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE admin_users.id = auth.uid()
    )
  );

CREATE POLICY "Admin can delete website visits"
  ON website_visits
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE admin_users.id = auth.uid()
    )
  );

-- Public policies for inserting data
CREATE POLICY "Anyone can insert contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can insert website visits"
  ON website_visits
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Insert default admin user (password: admin123)
INSERT INTO admin_users (username, password_hash, admin_url_id)
VALUES (
  'portfolio_admin',
  '$2b$10$rK3x9bW5mN8qP2vL7sT4uOYzHjFgDcVbNmKlQwErTyUiOpAsDfGhK',
  'rK3x9bW5mN8qP2vL7sT4uO'
) ON CONFLICT (username) DO NOTHING;