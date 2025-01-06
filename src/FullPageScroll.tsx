// FullpageScroll.tsx
import { useState, useEffect, TouchEvent } from "react";
import { useSpring, animated, config } from "@react-spring/web";

interface Props {
  children: React.ReactNode[];
}

export default function FullpageScroll({ children }: Props) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  const springs = useSpring({
    top: `-${currentPage * 100}vh`,
    config: { ...config.molasses, mass: 1, tension: 180, friction: 26 },
    onRest: () => setIsScrolling(false),
  });

  const navigatePage = (direction: "up" | "down") => {
    if (isScrolling) return;

    setIsScrolling(true);
    if (direction === "down" && currentPage < children.length - 1) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "up" && currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      navigatePage(e.deltaY > 0 ? "down" : "up");
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        navigatePage("down");
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        navigatePage("up");
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentPage, children.length, isScrolling]);

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    const deltaY = touchStart - e.changedTouches[0].clientY;
    if (Math.abs(deltaY) > 50) {
      navigatePage(deltaY > 0 ? "down" : "up");
    }
  };

  return (
    <div className="min-vh-100 overflow-hidden position-relative">
      <animated.div
        style={springs}
        className="position-absolute w-100"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {children.map((child, index) => (
          <div key={index} className="min-vh-100">
            {child}
          </div>
        ))}
      </animated.div>
    </div>
  );
}
