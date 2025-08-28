import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageVisit } from '../utils/visitTracker';

export const useVisitTracker = (username = '') => {
  const location = useLocation();

  useEffect(() => {
    const currentUrl = window.location.origin + location.pathname;
    trackPageVisit(currentUrl, username);
  }, [location, username]);
};