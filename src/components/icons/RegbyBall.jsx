import React from "react";
import Svg, { Defs, G, Path, ClipPath, Rect } from "react-native-svg";

const RegbyBallIcon = ({ color }) => {


  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <G clip-path="url(#clip0_4881_11559)">
        <Path
         d="M13.7337 2.22538C11.1893 2.88919 8.54735 4.45265 6.48535 6.51465C4.42328 8.57672 2.85989 11.2186 2.19608 13.763C1.47115 16.5417 1.87185 18.8719 3.32445 20.3244C4.77704 21.777 7.10716 22.1777 9.88573 21.4527C12.43 20.7889 15.0719 19.2255 17.134 17.1634C19.196 15.1013 20.7594 12.4595 21.4233 9.91516C22.1482 7.13659 21.7475 4.80641 20.295 3.35389C18.8425 1.90136 16.5123 1.50052 13.7337 2.22538ZM18.3816 7.68228C17.3336 9.59943 15.6275 11.8039 13.701 13.7304C11.7744 15.657 9.56999 17.363 7.65284 18.4111C5.66703 19.4967 4.59102 19.5355 4.35223 19.2967C4.11344 19.0579 4.15215 17.9817 5.23769 15.9959C6.28576 14.0788 7.9918 11.8743 9.91834 9.94778C11.8449 8.02124 14.0493 6.31519 15.9665 5.26713C17.9523 4.18152 19.0285 4.14281 19.2673 4.3816C19.5061 4.62038 19.4673 5.6964 18.3816 7.68228ZM7.51313 7.54257C10.2991 4.7566 13.9506 3.19218 16.6306 3.3423C14.1283 4.37173 11.0637 6.747 8.89063 8.92007C6.71756 11.0931 4.34243 14.1576 3.31294 16.6599C3.16274 13.9799 4.72723 10.3285 7.51313 7.54257ZM16.1062 16.1356C13.3202 18.9216 9.66873 20.486 6.98883 20.3358C9.49113 19.3064 12.5556 16.9312 14.7287 14.7581C16.9018 12.5851 19.277 9.52056 20.3065 7.01819C20.4566 9.6981 18.8922 13.3496 16.1062 16.1356Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_4881_11559">
          <Rect width="24" height="24" fill="white"/>
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default RegbyBallIcon;
