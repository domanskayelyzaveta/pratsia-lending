// import sprite from "../../assets/sprite.svg";

// export const Icon = ({ width, height, icon, ref, className }) => {
//   return (
//     <svg width={width} height={height} className={className} ref={ref}>
//       <use href={`${sprite}#${icon}`} />
//     </svg>
//   );
// };

import React, { forwardRef } from "react";
import sprite from "../../assets/sprite.svg";

export const Icon = forwardRef(({ width, height, icon, className }, ref) => {
  return (
    <svg width={width} height={height} className={className} ref={ref}>
      <use href={`${sprite}#${icon}`} />
    </svg>
  );
});

Icon.displayName = "Icon";
