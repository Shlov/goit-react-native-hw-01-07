import { StyleSheet, TouchableOpacity } from 'react-native';
import { Svg, Path, Circle } from "react-native-svg";

export const AddAvatarBtn = () => {
  return (
    <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
      <Svg
        width={25}
        height={25}
        fill="none"
        viewBox="0 0 25 25"
      >
        <Circle cx='12.5' cy='12.5' r='12' fill="#fff" stroke="#FF6C00" />
        <Path
          fill="#FF6C00"
          fillRule="evenodd"
          d="M13 6h-1v6H6v1h6v6h1v-6h6v-1h-6V6Z"
          clipRule="evenodd"
        />
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    bottom: 14,
    right: -12.5,
  },
});
