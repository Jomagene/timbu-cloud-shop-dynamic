import React, { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ReturnToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="h-[50px] hover:bg-[#222222] w-[200px] text-white font-medium bg-black flex items-center justify-center gap-2 fixed bottom-[320px] right-[60px] rounded-xl">
          Return to top
          <span className="h-[35px] w-[35px] bg-white text-black rounded-md">
            <ArrowUpwardIcon />
          </span>
        </button>
      )}
    </div>
  );
};

export default ReturnToTopButton;
