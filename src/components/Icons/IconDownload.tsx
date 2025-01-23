import { IconProps } from "../../types";

export default function IconDownload({
  size = 40,
  stroke = "currentColor",
  fill = "none",
  className = "",
}: IconProps) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={fill}
      stroke={stroke}
      className={className}
      viewBox="0 0 24 24"
    >
      <path d="M20 15v4c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1v4c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1zM13 12.586v-9.586c0-0.552-0.448-1-1-1s-1 0.448-1 1v9.586l-3.293-3.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5 5c0.092 0.092 0.202 0.166 0.324 0.217s0.253 0.076 0.383 0.076c0.256 0 0.512-0.098 0.707-0.293l5-5c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z"></path>
    </svg>
  );
}
