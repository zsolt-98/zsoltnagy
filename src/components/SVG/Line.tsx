import { useMediaQuery } from "react-responsive";
import { IconProps } from "../../types";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

export default function Line({ className }: IconProps) {
  const isUnderLGScreen = useMediaQuery({ maxWidth: 991 });
  const { scrollYProgress } = useScroll({});

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const pathLength = useTransform(smoothProgress, [0.3, 1], [0, 1]);

  return (
    <svg
      width={isUnderLGScreen ? "324" : "1077"}
      height={isUnderLGScreen ? "1200" : "850"}
      viewBox={isUnderLGScreen ? "0 0 324 1200" : "0 0 1077 850"}
      preserveAspectRatio={isUnderLGScreen ? "none" : "xMidYMid meet"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ overflow: "visible" }}
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <motion.path
        style={{ pathLength }}
        d={
          isUnderLGScreen
            ? "M135 1C135 1 -0.362887 363.195 1.00005 420C4.56569 668.61 313.09 574.678 323 723C331.828 955.13 135 1199 135 1199"
            : "M68.0846 -174C68.0846 -174 -47.1529 100.116 24.4433 192.908C96.0395 285.7 280.058 274.232 442.155 230.442C604.252 186.652 668.676 137.65 820.382 169.971C972.088 202.291 1076 323.965 1076 520.287C1076 716.61 981.08 796.797 755.329 796.797C429.577 796.797 46.4753 396.668 68.0846 922L77 1001.5"
        }
        stroke="#58c4dc"
        strokeWidth="3"
        filter="url(#glow)"
      />
    </svg>
  );
}
