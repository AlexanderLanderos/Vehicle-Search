import { ViewStyle } from "react-native";

export interface Styles {
  safeArea: ViewStyle;
  container: ViewStyle;
}

export const HomeStyles = () => {
  return {
    safeArea: {
      lex: 1,
      backgroundColor: "FFFFFF",
    },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  };
};
