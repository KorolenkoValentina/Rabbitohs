import React from "react";
import Svg, { Rect } from "react-native-svg";

const LinesIcon = ({ color }) => {


  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Rect x="5" y="5" width="1.6" height="13" rx="0.8" fill={color}/>
    <Rect x="17" y="5" width="1.6" height="13" rx="0.8" fill={color}/>
    <Rect x="11" y="2" width="1.6" height="5" rx="0.8" fill={color}/>
    <Rect x="11" y="9" width="1.6" height="5" rx="0.8" fill={color}/>
    <Rect x="11" y="16" width="1.6" height="5" rx="0.8" fill={color}/>
    </Svg>
  )
}

export default LinesIcon;
