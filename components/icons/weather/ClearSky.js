import * as React from "react";
const SvgClearSky = (props) => (
  <svg
    width={1080}
    height={849}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#clear-sky_svg__a)" d="M0 0h1080v848.763H0z" />
    <defs>
      <pattern
        id="clear-sky_svg__a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#clear-sky_svg__b" transform="scale(.00041 .00053)" />
      </pattern>
      <image
        id="clear-sky_svg__b"
        width={2410}
        height={1894}
      />
    </defs>
  </svg>
);
export default SvgClearSky;