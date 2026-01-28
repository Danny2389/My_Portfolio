import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageVisit } from "../utils/visitTracker";

export function useVisitTracker() {
  const location = useLocation();

  useEffect(() => {
    try {
      trackPageVisit(location.pathname);
    } catch (err) {
      if (err !== "Supabase not configured") {
        console.warn("Visit tracking failed:", err);
      }
    }
  }, [location.pathname]);
}