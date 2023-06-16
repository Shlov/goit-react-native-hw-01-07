import { StyleSheet, TouchableOpacity } from 'react-native';
import { Svg, Path, Circle } from "react-native-svg";

export const DelAvatarBtn = () => {
  return (
    <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
      <Svg width={37} height={37} fill="none">
        <Circle
          cx={18.5}
          cy={18.5}
          r={12}
          fill="#fff"
          stroke="#E8E8E8"
          transform="rotate(-45 18.5 18.5)"
        />
        <Path
          fill="#BDBDBD"
          fillRule="evenodd"
          d="m14.257 13.55-.707.707 4.243 4.243-4.243 4.243.707.707 4.243-4.243 4.243 4.243.707-.707-4.243-4.243 4.243-4.243-.707-.707-4.243 4.243-4.243-4.243Z"
          clipRule="evenodd"
        />
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    bottom: 8.82,
    right: -17.18,
  },
});