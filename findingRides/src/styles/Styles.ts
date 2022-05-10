import { TextStyle, ViewStyle } from "react-native";

export interface StylesHOME {
  backgroundColor: ViewStyle;
  textyText: TextStyle;
}

export const HomeStyles = () => {
  return {
    backgroundColor: "red",
    textyText: "14 Arial bold",
  };
};
