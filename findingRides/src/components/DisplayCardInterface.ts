import { ViewStyle } from "react-native";

type item = {
  availability: boolean;
  car: string;
  car_color: string;
  car_model: string;
  car_model_year: number;
  car_vin: string;
  id: number;
  price: string;
};

type Vehicle = {
  index: number;
  item: item;
};

export interface DisplayCardProps {
  vehicleData: Vehicle | undefined;
}

export interface Styles {
  cardContainer: ViewStyle;
  imageContainer: ViewStyle;
  carImage: ViewStyle;
}
