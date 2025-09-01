import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageVisit } from "../utils/visitTracker";

export function useVisitTracker() {
  const location = useLocation();

  useEffect(() => {
    // Only track visits for non-admin pages
    if (!location.pathname.startsWith("/admin")) {
      try {
        trackPageVisit(location.pathname);
      } catch (err) {
        console.warn("Visit tracking failed:", err);
      }
    }
  }, [location.pathname]);
}