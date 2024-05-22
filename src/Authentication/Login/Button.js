import React from "react";
import {
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from "react-native";

const Button = ({
  BtnStyle,
  title,
  icon,
  onPress,
  navigation,
  btnTxt,
  price,
  upDown,
  disable,
  resetBtn,
  down,
  pay,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        BtnStyle,
        { justifyContent: icon ? "center" : "space-between" },
        { opacity: disable ? 0.4 : 1 },
      ]}
      onPress={resetBtn ? resetBtn : onPress}
      disabled={disable}
    >
      <Text style={[styles.BtnTxt, btnTxt]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#EB9E4C",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  BtnTxt: {
    color: "#340400",
    textTransform: "uppercase",
  },
  btnIcon: {
    width: 23,
    height: 23,
    resizeMode: "contain",
    color: "#340400",
    textTransform: "uppercase",
  },
  priceBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
    marginLeft: 10,
  },
});
