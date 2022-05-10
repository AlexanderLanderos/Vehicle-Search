import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

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

export const DisplayCard = ({ vehicleData }: DisplayCardProps) => {
  const [vehicleImage, setVehicleImage] = useState<string>();
  const vehicle = vehicleData.item;
  const imgURl = "https://picsum.photos/200";

  const getImage = async () => {
    const imgData = await fetch(imgURl).then((res) => res.url);
    setVehicleImage(imgData);
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <View style={styles.cardContainer}>
      <View>
        <View style={styles.imageContainer}>
          <Image style={styles.carImage} source={{ uri: vehicleImage }} />
        </View>

        <View>
          <View style={styles.detailsContainer}>
            <Text style={{ flex: 0.2 }}>Year : </Text>
            <Text>{vehicle.car_model_year}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text>Make : </Text>
            <Text>{vehicle.car}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text>Model : </Text>
            <Text>{vehicle.car_model}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text>Color : </Text>
            <Text>{vehicle.car_color}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text>Vin : </Text>
            <Text>{vehicle.car_vin}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderColor: "#D5D5D5",
    borderWidth: "1px",
    width: "100%",
    marginVertical: 10,
    padding: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: "#FDFDFD",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  carImage: {
    height: 150,
    width: 300,
  },
  detailsContainer: {
    flexDirection: "row",
    paddingLeft: 30,
  },
});
