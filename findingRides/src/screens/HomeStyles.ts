import { ViewStyle } from "react-native";

export interface Styles {
  container: ViewStyle;
}

export const HomeStyles = () => {
  return {
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  };
};
