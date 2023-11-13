import React from "react";

const Camera = ({ ...props }) => {
  return (
    <svg
      {...props}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <circle cx="20" cy="20" r="20" fill="#00359A" />
      <rect x="8" y="8" width="24" height="24" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_96_2787" transform="scale(0.0104167)" />
        </pattern>
        <image
          id="image0_96_2787"
          width="96"
          height="96"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default Camera;
