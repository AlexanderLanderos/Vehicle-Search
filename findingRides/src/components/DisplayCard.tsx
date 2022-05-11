import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { CardLayout } from "./CardLayout";
import { DisplayCardStyles } from "./DispayCardsStyles";
import { DisplayCardProps, Styles } from "./DisplayCardInterface";

export const DisplayCard = ({ vehicleData }: DisplayCardProps) => {
  const [vehicleImage, setVehicleImage] = useState<string>();
  const vehicle = vehicleData.item;
  const styles = StyleSheet.create(DisplayCardStyles() as Styles);
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
          <Image
            style={{ height: 150, width: 300 }}
            source={{ uri: vehicleImage }}
          />
        </View>
        <CardLayout
          year={vehicle.car_model_year}
          make={vehicle.car}
          model={vehicle.car_model}
          price={vehicle.price}
        />
      </View>
    </View>
  );
};
