import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageVisit } from '../utils/visitTracker';


export function useVisitTracker() { 
  useEffect(() => {
    if (!window.location.pathname.startsWith("/admin")) {
      try {
        // Your tracking logic here
      } catch (err) {
        console.warn("Visit tracking failed:", err);
      }
    }
  }, []);
}