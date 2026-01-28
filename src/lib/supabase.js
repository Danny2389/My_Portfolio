import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'placeholder-key';

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
    // Skip tracking if Supabase isn't properly configured
    if (supabaseUrl.includes('placeholder') || supabaseAnonKey.includes('placeholder')) {
      return { success: false, error: 'Supabase not configured' };
    }

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

