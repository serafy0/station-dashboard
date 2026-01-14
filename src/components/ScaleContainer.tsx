"use client";

import { useEffect, useState, useRef } from "react";

interface ScaleContainerProps {
  children: React.ReactNode;
}

const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 1080;
export function ScaleContainer({ children }: ScaleContainerProps) {
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const scaleX = windowWidth / DESIGN_WIDTH;
      const scaleY = windowHeight / DESIGN_HEIGHT;

      const newScale = Math.min(scaleX, scaleY);
      
      setScale(newScale);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div 
      className="w-full h-screen bg-[#020408] overflow-hidden flex items-center justify-center relative"
    >
      <div
        ref={containerRef}
        style={{
          width: `${DESIGN_WIDTH}px`,
          height: `${DESIGN_HEIGHT}px`,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
        className="flex flex-col shrink-0"
      >
        {children}
      </div>
    </div>
  );
}
