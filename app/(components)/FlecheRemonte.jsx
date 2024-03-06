"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
function FlecheRemonte() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    
    <AnimatePresence>
      {showArrow && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="h-12 w-12 bg-[#FF7E14] rounded-full fixed bottom-4 right-4 cursor-pointer flex justify-center items-center p-2"
          onClick={handleClick}
        >
          <Image src="/Images/arrow.svg" width={30} height={30} alt="arrow" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default FlecheRemonte;
