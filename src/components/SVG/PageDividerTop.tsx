import { IconProps } from "../../types";

export default function PageDividerTop({ className }: IconProps) {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      style={{ transform: "rotate(180deg)" }}
      className={className}
    >
      <defs>
        <pattern
          id="grain-pattern"
          width="150"
          height="150"
          patternUnits="userSpaceOnUse"
        >
          <image
            href="https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png"
            width="150"
            height="150"
            style={{ opacity: 0.06 }}
          />
        </pattern>

        <pattern
          id="composite"
          width="150"
          height="150"
          patternUnits="userSpaceOnUse"
        >
          <rect width="150" height="150" fill="#3d4452" />
          <rect
            width="150"
            height="150"
            fill="url(#grain-pattern)"
            style={{ mixBlendMode: "overlay" }}
          />
        </pattern>
      </defs>

      <path
        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
        fill="url(#composite)"
      />
    </svg>
  );
}
