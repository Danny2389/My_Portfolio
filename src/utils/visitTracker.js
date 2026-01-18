import { trackVisit } from '../lib/supabase';

// Get user's IP address
export const getUserIP = async () => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('Error getting IP:', error);
    return 'unknown';
  }
};

// Track page visit
export const trackPageVisit = async (pageUrl, username = '') => {
  try {
    const ipAddress = await getUserIP();
    const userAgent = navigator.userAgent;
    
    const visitData = {
      ip_address: ipAddress,
      user_agent: userAgent,
      page_url: pageUrl,
      username: username
    };

    const result = await trackVisit(visitData);
    if (!result.success) {
      console.warn('Visit tracking failed:', result.error);
    }
  } catch (error) {
    console.error('Error tracking page visit:', error);
    // Silently fail - don't break the app
  }
};