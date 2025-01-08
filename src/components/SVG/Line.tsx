import { IconProps } from "../../types";

export default function Line({ className }: IconProps) {
  return (
    <svg
      width="1101"
      height="849"
      viewBox="0 0 1101 849"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feFlood floodColor="#58c4dc" floodOpacity="0.7" result="color" />
          <feComposite in="color" in2="blur" operator="in" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M126 0C126 0 15.097 167 84.0002 256C152.903 345 330.001 334 486 292C642 250 704.001 203 850.001 234C996.001 265 1126 412 1096 570C1066 728 954.001 823 772.001 846C590.001 869 199.027 685.889 0 788"
        stroke="#58c4dc"
        filter="url(#glow)"
      />
    </svg>
  );
}
