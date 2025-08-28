import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Contact form submission
export const submitContactForm = async (formData, ipAddress) => {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: formData.from_name,
          email: formData.reply_to,
          company_name: formData.company_name,
          contact_info: formData.contact_info,
          message: formData.message,
          ip_address: ipAddress
        }
      ]);

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error: error.message };
  }
};

// Track website visits
export const trackVisit = async (visitData) => {
  try {
    const { data, error } = await supabase
      .from('website_visits')
      .insert([visitData]);

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error tracking visit:', error);
    return { success: false, error: error.message };
  }
};

// Admin functions
export const verifyAdminUrl = async (urlId) => {
  try {
    const { data, error } = await supabase
      .from('admin_users')
      .select('username, admin_url_id')
      .eq('admin_url_id', urlId)
      .single();

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const adminLogin = async (username, password) => {
  try {
    // In a real app, you'd verify the password hash
    // For demo purposes, we'll use a simple check
    const { data, error } = await supabase
      .from('admin_users')
      .select('*')
      .eq('username', username)
      .single();

    if (error) throw error;
    
    // Simple password check (in production, use proper bcrypt comparison)
    if (password === 'admin123') {
      return { success: true, data };
    } else {
      return { success: false, error: 'Invalid password' };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const getContactSubmissions = async () => {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const getWebsiteVisits = async () => {
  try {
    const { data, error } = await supabase
      .from('website_visits')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const deleteContactSubmission = async (id) => {
  try {
    const { error } = await supabase
      .from('contact_submissions')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const deleteWebsiteVisit = async (id) => {
  try {
    const { error } = await supabase
      .from('website_visits')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};