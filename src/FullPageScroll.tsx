import { useState, useEffect, TouchEvent, useCallback } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import { useMediaQuery } from "react-responsive";
import useZustandStore from "./store/useZustandStore";

interface Props {
  children: React.ReactNode[];
}

const PaginationButton = ({
  isActive,
  index,
  onClick,
}: {
  isActive: boolean;
  index: number;
  onClick: () => void;
}) => {
  const springs = useSpring({
    transform: isActive ? "scale(1.25) rotate(0deg)" : "scale(1) rotate(45deg)",
    config: { mass: 1, tension: 300, friction: 35, clamp: true },
  });

  return (
    <animated.button
      onClick={onClick}
      className={`${
        isActive
          ? "bg-transparent border border-info"
          : "rounded-circle border-0 bg-info"
      }`}
      style={{
        width: isActive ? "14px" : "12px",
        height: isActive ? "14px" : "12px",
        ...springs,
        transition: "width 0.3s, height 0.3s",
      }}
      aria-label={`Go to page ${index + 1}`}
    />
  );
};

export default function FullpageScroll({ children }: Props) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const isLargeScreen = useMediaQuery({ minWidth: 992 });
  const { setIsOpen } = useZustandStore();

  const springs = useSpring({
    top: `-${currentPage * 100}vh`,
    config: { mass: 1, tension: 170, friction: 26, clamp: true },
    onRest: () => setIsScrolling(false),
  });

  const navigatePage = useCallback(
    (direction: "up" | "down" | number) => {
      if (!isLargeScreen) return;

      setCurrentPage((prev) => {
        if (typeof direction === "number") {
          if (direction === 0 && prev !== 0) {
            setIsScrolling(true);
            return direction;
          }
          if (direction === prev) return prev;
          setIsScrolling(true);
          return direction;
        }

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
    [children.length, isLargeScreen, setIsOpen]
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

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    const deltaY = touchStart - e.changedTouches[0].clientY;
    if (Math.abs(deltaY) > 50 && !isScrolling) {
      navigatePage(deltaY > 0 ? "down" : "up");
    }
  };

  if (!isLargeScreen) {
    return <div className="vh-100">{children}</div>;
  }

  return (
    <div className="homepage-container vh-100 overflow-hidden position-relative">
      {isLargeScreen && (
        <div
          className="scroll-pagination position-fixed top-50 translate-middle-y d-flex flex-column align-items-center gap-3"
          style={{ zIndex: 999 }}
        >
          {children.map((_, index) => (
            <PaginationButton
              key={index}
              isActive={currentPage === index}
              index={index}
              onClick={() => navigatePage(index)}
            />
          ))}
        </div>
      )}

      <animated.div
        style={springs}
        className="full-page-scroll position-absolute w-100"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {children.map((child, index) => (
          <section key={index} className="vh-100">
            {child}
          </section>
        ))}
      </animated.div>
    </div>
  );
}
