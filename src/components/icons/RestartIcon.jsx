import React from "react";
import Svg, {  Path } from "react-native-svg";

const RestartIcon = ({ color }) => {


  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
     
        <Path
         d="M21.7095 7.88561C21.4058 7.67417 20.992 7.75407 20.785 8.06408L19.428 10.096C19.0755 8.41866 18.2589 6.8774 17.0438 5.63663C15.3789 3.93637 13.1654 3 10.8108 3C8.45626 3 6.24261 3.93637 4.57771 5.63663C1.14076 9.14658 1.14076 14.8577 4.57771 18.3675C6.29619 20.1225 8.55348 21 10.8108 21C13.0681 21 15.3254 20.1225 17.0438 18.3675C17.3037 18.1022 17.3037 17.672 17.0438 17.4066C16.784 17.1413 16.3627 17.1413 16.103 17.4066C13.1848 20.3867 8.43683 20.3867 5.51874 17.4066C2.60065 14.4265 2.60065 9.57753 5.51874 6.59746C6.93232 5.15395 8.81171 4.3589 10.8109 4.3589C12.81 4.3589 14.6895 5.15395 16.103 6.59755C17.194 7.71167 17.9051 9.11161 18.1735 10.6314L15.8118 8.98641C15.5082 8.77497 15.0943 8.85487 14.8872 9.16488C14.6802 9.47489 14.7584 9.8976 15.062 10.109L18.585 12.5629C18.5852 12.563 18.5853 12.5632 18.5855 12.5634C18.6412 12.6022 18.7007 12.6307 18.7618 12.6502C18.7636 12.6508 18.7654 12.6518 18.7673 12.6524C18.7777 12.6556 18.7882 12.6569 18.7987 12.6596C18.8519 12.6732 18.9058 12.6815 18.9598 12.6815C19.1723 12.6815 19.3812 12.5777 19.51 12.3849L21.8843 8.82987C22.0913 8.51976 22.0131 8.09706 21.7095 7.88561Z"
          fill={color}
        />
        
    </Svg>
  )
}

export default RestartIcon;

