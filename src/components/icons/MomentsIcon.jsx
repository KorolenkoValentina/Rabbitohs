import React from "react";
import Svg, { Defs, G, Path, ClipPath, Rect } from "react-native-svg";

const MomentsIcon = (props) => {
  const { focused } = props;

  const color = focused ? "#03502F" : "#737375";

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <G clip-path="url(#clip0_4648_14238)">
        <Path
         d="M12 3C7.02574 3 3 7.02528 3 12C3 16.9743 7.02528 21 12 21C16.9743 21 21 16.9747 21 12C21 7.02574 16.9747 3 12 3ZM12 19.8C7.69909 19.8 4.19999 16.3009 4.19999 12C4.19999 7.69905 7.69909 4.19999 12 4.19999C16.3009 4.19999 19.8 7.69909 19.8 12C19.8 16.3009 16.3009 19.8 12 19.8Z"
          fill={color}
        />
        <Path 
        d="M14.9764 8.22295L10.6057 10.3249C10.483 10.3839 10.384 10.4828 10.325 10.6056L8.22313 14.9763C7.97802 15.486 8.51398 16.0223 9.02388 15.777L13.3946 13.6751C13.5173 13.6161 13.6163 13.5171 13.6753 13.3944L15.7772 9.0237C16.0222 8.51411 15.4865 7.97759 14.9764 8.22295ZM12.6849 12.6848L10.0464 13.9537L11.3153 11.3152L13.9538 10.0463L12.6849 12.6848Z"
        fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_4648_14238">
          <Rect width="18" height="18" fill="white" transform="translate(3 3)"/>
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default MomentsIcon;
