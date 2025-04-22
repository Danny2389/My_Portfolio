import React, { useEffect, useState } from "react";

const CopyPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleViolation = (e) => {
      e.preventDefault();
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    };

    document.addEventListener("copy", handleViolation);
    document.addEventListener("selectstart", handleViolation);

    return () => {
      document.removeEventListener("copy", handleViolation);
      document.removeEventListener("selectstart", handleViolation);
    };
  }, []);

  return (
    showPopup && (
      <div className="copy-popup">
        🚫 Copy Disabled
      </div>
    )
  );
};

export default CopyPopup;
