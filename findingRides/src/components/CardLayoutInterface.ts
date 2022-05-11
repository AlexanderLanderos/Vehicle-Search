import { TextStyle, ViewStyle } from "react-native";

export interface Styles {
  detailWrapper: ViewStyle;
  detailsContainer: ViewStyle;
  vehicleInfo: TextStyle;
}

export interface CardLayoutProps {
  year: number;
  make: string;
  model: string;
  price: string;
}
