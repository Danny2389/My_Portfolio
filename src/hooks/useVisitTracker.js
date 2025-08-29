// src/hooks/useVisitTracker.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { track } from "@vercel/analytics/react"; // ✅ use 'track' instead of 'trackPageVisit'

export function useVisitTracker() {
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.startsWith("/admin")) {
      try {
        track("pageview"); // send a pageview event
      } catch (err) {
        console.warn("Visit tracking failed:", err);
      }
    }
  }, [location.pathname]);
}
