"use client";
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function ScrollBack({ clicked, setIsClicked }) {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    // Track the scroll position to determine when to show 'scroll to top' or 'scroll to bottom'
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsAtTop(false); // User scrolled past a threshold, show "scroll to top"
      } else {
        setIsAtTop(true); // User is near the top, show "scroll to bottom"
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='inline-block fixed bottom-10 right-10'>
      <Link 
        onClick={() => setIsClicked(!clicked)} 
        href={isAtTop ? "#footer" : "#home"} 
        className='p-4 flex items-center justify-center bg-hero rounded-full dark:bg-channel-dark text-white'
        aria-label={isAtTop ? "Scroll to bottom" : "Scroll to top"}
      >
        {isAtTop ? <ChevronDown /> : <ChevronUp />}
      </Link>
    </div>
  );
}
