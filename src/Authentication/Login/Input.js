import { StyleSheet, TextInput } from "react-native";
import React from "react";

const Input = ({
  placeholder,
  keyboardType,
  onChangeText,
  value,
  style,
  textLength,
  onFocus,
  onBlur,
}) => {
  return (
    <TextInput
      onBlur={onBlur}
      onFocus={onFocus}
      placeholder={placeholder}
      placeholderTextColor={"#A6A6A6"}
      style={[styles.input, style]}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      value={value}
      maxLength={textLength}
    />
  );
};

export default Input;

export const styles = StyleSheet.create({
  input: {
    backgroundColor: "#272727",
    color: "#FFFFFF",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
});
