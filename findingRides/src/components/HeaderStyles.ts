import { TextStyle, ViewStyle } from "react-native";

export interface Styles {
  header: ViewStyle;
  headerText: TextStyle;
}

export const HeaderStyles = () => {
  return {
    header: {
      flex: 0.1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5F3F5",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      shadowColor: "#302B27",
      zIndex: 5,
      elevation: 5,
    },
    headerText: {
      fontWeight: "bold",
      fontSize: 25,
      color: "#302B27",
    },
  };
};
