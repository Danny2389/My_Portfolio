import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageVisit } from "@vercel/analytics/react";

export function useVisitTracker() {
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.startsWith("/admin")) {
      try {
        trackPageVisit(); // track the page visit
      } catch (err) {
        console.warn("Visit tracking failed:", err);
      }
    }
  }, [location.pathname]);
}
