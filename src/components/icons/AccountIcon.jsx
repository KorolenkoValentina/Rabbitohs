import React from "react";
import Svg, { Defs, G, Path, ClipPath, Rect } from "react-native-svg";

const AccountIcon = (props) => {
  const { focused } = props;

  const color = focused ? "#03502F" : "#737375";

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <G clipPath="url(#clip0_4603_7760)">
        <Path
          d="M12.5648 21H11.4351C10.5215 21 9.77809 20.2567 9.77809 19.343V18.9608C9.38965 18.8367 9.01225 18.68 8.64968 18.4924L8.37884 18.7633C7.72286 19.42 6.67207 19.4008 6.03514 18.763L5.23671 17.9646C4.59866 17.3273 4.58031 16.2768 5.23692 15.6209L5.50755 15.3503C5.31993 14.9877 5.1633 14.6104 5.03917 14.2219H4.65702C3.74338 14.2219 3 13.4785 3 12.5649V11.4351C3 10.5215 3.74338 9.77813 4.65705 9.77813H5.0392C5.16334 9.38965 5.31996 9.01228 5.50759 8.64971L5.23675 8.37891C4.58052 7.72338 4.59863 6.67284 5.23696 6.03521L6.03546 5.23675C6.67386 4.59746 7.7244 4.5815 8.37912 5.23696L8.64971 5.50755C9.01228 5.31996 9.38968 5.1633 9.77813 5.03917V4.65702C9.77813 3.74334 10.5215 3 11.4352 3H12.5649C13.4785 3 14.2219 3.74334 14.2219 4.65702V5.0392C14.6103 5.1633 14.9877 5.31996 15.3503 5.50759L15.6211 5.23675C16.2771 4.57996 17.3279 4.59922 17.9648 5.23699L18.7633 6.03539C19.4013 6.67274 19.4197 7.72317 18.763 8.37908L18.4924 8.64971C18.68 9.01228 18.8367 9.38961 18.9608 9.77813H19.3429C20.2566 9.77813 21 10.5215 21 11.4351V12.5649C21 13.4785 20.2566 14.2219 19.3429 14.2219H18.9608C18.8367 14.6104 18.68 14.9877 18.4924 15.3503L18.7633 15.6211C19.4195 16.2767 19.4014 17.3272 18.763 17.9648L17.9645 18.7633C17.3261 19.4026 16.2756 19.4185 15.6209 18.7631L15.3503 18.4925C14.9877 18.6801 14.6103 18.8367 14.2219 18.9609V19.3431C14.2219 20.2567 13.4785 21 12.5648 21ZM8.82599 17.3849C9.32967 17.6828 9.87178 17.9078 10.4372 18.0537C10.6701 18.1138 10.8328 18.3238 10.8328 18.5643V19.343C10.8328 19.6751 11.1031 19.9453 11.4352 19.9453H12.5649C12.897 19.9453 13.1672 19.6751 13.1672 19.343V18.5643C13.1672 18.3238 13.3299 18.1138 13.5628 18.0537C14.1283 17.9078 14.6704 17.6828 15.174 17.3849C15.3813 17.2623 15.6451 17.2957 15.8154 17.4659L16.3669 18.0175C16.6047 18.2556 16.9866 18.25 17.2186 18.0177L18.0176 17.2188C18.249 16.9877 18.2567 16.6057 18.0178 16.3671L17.466 15.8153C17.2958 15.6451 17.2624 15.3812 17.385 15.174C17.6828 14.6704 17.9078 14.1283 18.0538 13.5628C18.1139 13.3299 18.3239 13.1672 18.5644 13.1672H19.343C19.6751 13.1672 19.9453 12.897 19.9453 12.5649V11.4352C19.9453 11.1031 19.6751 10.8328 19.343 10.8328H18.5644C18.3239 10.8328 18.1139 10.6701 18.0538 10.4373C17.9078 9.87182 17.6828 9.32971 17.385 8.82606C17.2624 8.61885 17.2958 8.35497 17.466 8.18474L18.0176 7.63317C18.256 7.39502 18.2498 7.01323 18.0178 6.78151L17.2188 5.98259C16.9873 5.7507 16.6053 5.74391 16.3672 5.98238L15.8154 6.53415C15.6452 6.70441 15.3813 6.73774 15.1741 6.61519C14.6704 6.31731 14.1283 6.09227 13.5628 5.94634C13.33 5.88626 13.1673 5.67623 13.1673 5.43573V4.65702C13.1673 4.3249 12.897 4.05469 12.5649 4.05469H11.4352C11.1031 4.05469 10.8328 4.3249 10.8328 4.65702V5.43566C10.8328 5.67616 10.6701 5.88619 10.4373 5.94627C9.87182 6.0922 9.32971 6.31724 8.82602 6.61512C8.61874 6.73764 8.35489 6.70431 8.18467 6.53408L7.63314 5.98252C7.39534 5.74444 7.01344 5.74996 6.78151 5.98227L5.98252 6.78123C5.75112 7.01235 5.74338 7.39425 5.9823 7.63289L6.53408 8.18467C6.70431 8.35489 6.73764 8.61878 6.61512 8.82599C6.31724 9.32964 6.09224 9.87175 5.9463 10.4372C5.88619 10.6701 5.67616 10.8328 5.4357 10.8328H4.65705C4.32493 10.8328 4.05469 11.103 4.05469 11.4351V12.5649C4.05469 12.897 4.32493 13.1672 4.65705 13.1672H5.43566C5.67616 13.1672 5.88615 13.3299 5.94627 13.5627C6.0922 14.1282 6.31724 14.6703 6.61508 15.174C6.7376 15.3812 6.70427 15.6451 6.53405 15.8153L5.98248 16.3669C5.74405 16.605 5.75027 16.9868 5.98227 17.2185L6.7812 18.0174C7.01277 18.2493 7.39471 18.2561 7.63286 18.0177L8.1846 17.4659C8.31004 17.3405 8.571 17.2341 8.82599 17.3849Z"
          fill={color}
        />
        <Path
          d="M12 15.9163C9.84048 15.9163 8.08362 14.1594 8.08362 11.9999C8.08362 9.84039 9.84048 8.0835 12 8.0835C14.1596 8.0835 15.9164 9.84039 15.9164 11.9999C15.9164 14.1594 14.1596 15.9163 12 15.9163ZM12 9.13818C10.422 9.13818 9.13831 10.4219 9.13831 11.9999C9.13831 13.5779 10.4221 14.8616 12 14.8616C13.578 14.8616 14.8617 13.5779 14.8617 11.9999C14.8617 10.4219 13.578 9.13818 12 9.13818Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_4603_7760">
          <Rect width="18" height="18" fill="white" transform="translate(3 3)"/>
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default AccountIcon;