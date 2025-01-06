import { useState, useEffect, TouchEvent, useCallback } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import { useMediaQuery } from "react-responsive";
import useZustandStore from "./store/useZustandStore";

interface Props {
  children: React.ReactNode[];
}

export default function FullpageScroll({ children }: Props) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const isLargeScreen = useMediaQuery({ minWidth: 992 });
  const { isOpen, setIsOpen } = useZustandStore();

  const springs = useSpring({
    top: `-${currentPage * 100}vh`,
    config: { ...config.molasses, mass: 1, tension: 180, friction: 26 },
    onRest: () => setIsScrolling(false),
  });

  const navigatePage = useCallback(
    (direction: "up" | "down") => {
      if (!isLargeScreen) return;

      setCurrentPage((prev) => {
        if (direction === "down" && prev === 0) {
          setIsOpen(false);
        }
        if (direction === "down" && prev < children.length - 1) {
          setIsScrolling(true);
          return prev + 1;
        } else if (direction === "up" && prev > 0) {
          setIsScrolling(true);
          return prev - 1;
        }
        return prev;
      });
    },
    [children.length, isLargeScreen]
  );

  useEffect(() => {
    if (!isLargeScreen) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (!isScrolling) {
        navigatePage(e.deltaY > 0 ? "down" : "up");
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isScrolling) {
        if (e.key === "ArrowDown" || e.key === "PageDown") {
          e.preventDefault();
          navigatePage("down");
        } else if (e.key === "ArrowUp" || e.key === "PageUp") {
          e.preventDefault();
          navigatePage("up");
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isScrolling, navigatePage, isLargeScreen]);

  if (!isLargeScreen) {
    return <div>{children}</div>;
  }

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    const deltaY = touchStart - e.changedTouches[0].clientY;
    if (Math.abs(deltaY) > 50 && !isScrolling) {
      navigatePage(deltaY > 0 ? "down" : "up");
    }
  };

  return (
    <div className="homepage-container min-vh-100 overflow-hidden position-relative">
      <animated.div
        style={springs}
        className="full-page-scroll position-absolute w-100"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {children.map((child, index) => (
          <section key={index}>{child}</section>
        ))}
      </animated.div>
    </div>
  );
}
