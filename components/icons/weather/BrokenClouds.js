import * as React from "react";

const SvgBrokenClouds = (props) => (
  <svg
    width={1275}
    height={878}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#broken-clouds_svg__a)" d="M195 0h1080v753.467H195z" />
    <path fill="url(#broken-clouds_svg__b)" d="M0 124h1080v753.467H0z" />
    <defs>
      <pattern
        id="broken-clouds_svg__a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#broken-clouds_svg__c"
          transform="scale(.00043 .00062)"
        />
      </pattern>
      <pattern
        id="broken-clouds_svg__b"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use transform="scale(.00043 .00062)" />
      </pattern>
      <image id="broken-clouds_svg__c" width={2302} height={1606} />
    </defs>
  </svg>
);

export default SvgBrokenClouds;
