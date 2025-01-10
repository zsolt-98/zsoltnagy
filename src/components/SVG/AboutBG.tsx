import { IconProps } from "../../types";

export default function AboutBG({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1920 1080"
      className={className}
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        opacity: 0.25,
      }}
    >
      <defs>
        <linearGradient
          gradientTransform="rotate(-179, 0.5, 0.5)"
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="gggrain-gradient2"
        >
          <stop stopColor="#3D4452" stopOpacity="1" offset="-0%" />
          <stop stopColor="rgba(255,255,255,0)" stopOpacity="0" offset="100%" />
        </linearGradient>
        <linearGradient
          gradientTransform="rotate(179, 0.5, 0.5)"
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="gggrain-gradient3"
        >
          <stop stopColor="#23272F" stopOpacity="1" offset="0%" />
          <stop stopColor="rgba(255,255,255,0)" stopOpacity="0" offset="100%" />
        </linearGradient>
        <filter
          id="gggrain-filter"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.35"
            numOctaves="5"
            seed="2"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence"
          />
          <feColorMatrix
            type="saturate"
            values="0"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="turbulence"
            result="colormatrix"
          />
          <feComponentTransfer
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="colormatrix"
            result="componentTransfer"
          >
            <feFuncR type="linear" slope="6" />
            <feFuncG type="linear" slope="6" />
            <feFuncB type="linear" slope="6" />
          </feComponentTransfer>
          <feColorMatrix
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="componentTransfer"
            result="colormatrix2"
            type="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -23"
          />
        </filter>
      </defs>
      <g>
        <rect width="100%" height="100%" fill="#23272f" />
        <rect width="100%" height="100%" fill="url(#gggrain-gradient3)" />
        <rect width="100%" height="100%" fill="url(#gggrain-gradient2)" />
        <rect
          width="100%"
          height="100%"
          fill="transparent"
          filter="url(#gggrain-filter)"
          opacity="0.65"
          style={{ mixBlendMode: "soft-light" }}
        />
      </g>
    </svg>
  );
}
