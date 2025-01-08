import { IconProps } from "../../types";

export default function AboutBG({ className }: IconProps) {
  return (
    <svg
      width="216"
      height="454"
      viewBox="0 0 216 454"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <filter id="glow-lines" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feFlood floodColor="#E5E7EB" floodOpacity="0.15" result="color" />
          <feComposite in="color" in2="blur" operator="in" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glow-shapes" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feFlood floodColor="#58C4DC" floodOpacity="0.25" result="color" />
          <feComposite in="color" in2="blur" operator="in" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Lines with subtle glow */}
      <g filter="url(#glow-lines)">
        <line
          x1="21.7863"
          y1="19.9664"
          x2="160.932"
          y2="182.66"
          stroke="#E5E7EB"
          strokeWidth="4"
        />
        <line
          x1="161.391"
          y1="184.252"
          x2="127.139"
          y2="416.518"
          stroke="#E5E7EB"
          strokeWidth="4"
        />
      </g>

      {/* Shapes with stronger glow */}
      <g filter="url(#glow-shapes)">
        <ellipse
          cx="124.5"
          cy="417"
          rx="36"
          ry="35.5"
          transform="rotate(90 124.5 417)"
          fill="#58C4DC"
        />
        <circle
          cx="20.5"
          cy="21.5"
          r="19.5"
          transform="rotate(90 20.5 21.5)"
          fill="#58C4DC"
        />
        <ellipse
          cx="159"
          cy="184.5"
          rx="55.5"
          ry="55"
          transform="rotate(90 159 184.5)"
          fill="#58C4DC"
        />
      </g>
    </svg>
  );
}
