import * as React from "react";

const SvgSnow = (props) => (
  <svg
    width={1080}
    height={1080}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1080 0H0v1080h1080V0Z" fill="url(#snow_svg__a)" />
    <defs>
      <pattern
        id="snow_svg__a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use transform="scale(.00093)" />
      </pattern>
    </defs>
  </svg>
);

export default SvgSnow;
