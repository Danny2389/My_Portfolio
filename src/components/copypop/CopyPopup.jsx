import React, { useEffect, useState } from "react";

const CopyPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleViolation = (e) => {
      e.preventDefault();
      setShowPopup(true);
      document.body.style.transition = "none";
      document.body.style.filter = "blur(25px)";
      setTimeout(() => {
        setShowPopup(false);
        if (document.hasFocus()) {
          document.body.style.transition = "filter 0.3s";
          document.body.style.filter = "none";
        }
      }, 2000);
    };

    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey && (e.key === "u" || e.key === "U")) ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i")) ||
        (e.ctrlKey && (e.key === "s" || e.key === "S")) ||
        (e.metaKey && e.shiftKey && (e.key === "s" || e.key === "S")) || // Win+Shift+S
        e.key === "Meta" || // Windows Key
        e.key === "F12" ||
        e.key === "PrintScreen" ||
        e.keyCode === 44 || // PrintScreen legacy code
        e.keyCode === 123
      ) {
        handleViolation(e);
      }
    };

    // PrtSc sometimes only fires on keyup
    const handleKeyUp = (e) => {
      if (e.key === "PrintScreen" || e.keyCode === 44) {
        handleViolation(e);
        // Optional: Attempt to clear clipboard
        navigator.clipboard.writeText("Screenshots are disabled!");
      }
    };

    const handleWindowBlur = () => {
      document.body.style.transition = "none";
      document.body.style.filter = "blur(25px)";
    };

    const handleWindowFocus = () => {
      document.body.style.transition = "filter 0.3s";
      document.body.style.filter = "none";
    };

    document.addEventListener("copy", handleViolation);
    document.addEventListener("selectstart", handleViolation);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("focus", handleWindowFocus);

    return () => {
      document.removeEventListener("copy", handleViolation);
      document.removeEventListener("selectstart", handleViolation);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("focus", handleWindowFocus);
      // Ensure blur is removed on unmount
      document.body.style.filter = "none";
    };
  }, []);

  return (
    showPopup && (
      <div className="copy-popup">
        🚫 Key Disabled
      </div>
    )
  );
};

export default CopyPopup;
