import * as React from "react";

const SvgScatteredClouds = (props) => (
  <svg
    width={1080}
    height={754}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="url(#scattered-clouds_svg__a)" d="M0 0h1080v753.467H0z" />
    <defs>
      <pattern
        id="scattered-clouds_svg__a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use transform="scale(.00043 .00062)" />
      </pattern>
    </defs>
  </svg>
);

export default SvgScatteredClouds;
