import "./scrollUp.scss";
import { ArrowCircleUp, ChevronLeft } from "@mui/icons-material";
import React, { useState, useEffect } from "react";

const ScrollUp = () => {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const heroHeight = window.innerHeight; 
          if (window.scrollY >= heroHeight) {
            setShowButton(true);
          } else {
            setShowButton(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

  return (
        <>
            {showButton && (
                <div className="scrollUp" onClick={scrollToTop}>
                    <div className="buttonHold">
                        <button> 
                            <ChevronLeft/>
                        </button>
                    </div>
                </div>
            )}
        </>
  )
}

export default ScrollUp