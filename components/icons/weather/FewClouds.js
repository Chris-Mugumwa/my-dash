import * as React from "react";

const SvgFewClouds = (props) => (
  <svg
    width={1310}
    height={1080}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="url(#few-clouds_svg__a)" d="M0 0h1309.64v1080H0z" />
    <defs>
      <pattern
        id="few-clouds_svg__a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use transform="scale(.00034)" />
      </pattern>
    </defs>
  </svg>
);

export default SvgFewClouds;
