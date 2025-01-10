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
      {/* Base color path */}
      <path
        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
        fill="#23272f"
      />

      {/* Grain pattern path */}
      <path
        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
        fill="url(#grain)"
      />

      <defs>
        <pattern
          id="grain"
          patternUnits="userSpaceOnUse"
          width="150"
          height="150"
        >
          <image
            href="https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png"
            x="0"
            y="0"
            width="150"
            height="150"
            style={{ opacity: 0.06 }}
          />
        </pattern>
      </defs>
    </svg>
  );
}
