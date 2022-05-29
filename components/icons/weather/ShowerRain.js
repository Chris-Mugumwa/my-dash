import * as React from "react";

const SvgShowerRain = (props) => (
  <svg
    width={1080}
    height={1080}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#shower-rain_svg__a)">
      <path d="M1080 0H0v1080h1080V0Z" fill="url(#shower-rain_svg__b)" />
    </g>
    <defs>
      <clipPath id="shower-rain_svg__a">
        <path fill="#fff" d="M0 0h1080v1080H0z" />
      </clipPath>
      <pattern
        id="shower-rain_svg__b"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use transform="scale(.00093)" />
      </pattern>
    </defs>
  </svg>
);

export default SvgShowerRain;
