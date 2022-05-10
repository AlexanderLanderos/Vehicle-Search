import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  Image,
  Text,
  FlatList,
  SafeAreaView,
} from "react-native";
import { DisplayCard } from "../components/DisplayCard";
import { HomeStyles, StylesHOME } from "../styles/Styles";

export const Home: React.FC = () => {
  const [vehicleData, setVehicleData] = useState();
  const vehicleURL = "https://myfakeapi.com/api/cars";

  const style = StyleSheet.create(HomeStyles() as StylesHOME);

  const getVehicles = async () => {
    const data = await fetch(vehicleURL).then((res) => res.json());
    const trimData = data.cars.slice(0, 50);
    setVehicleData(trimData);
  };

  useState(() => {
    getVehicles();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "FFFFFF" }}>
      <View style={styles.header}>
        <Text>Finding Rides</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={vehicleData}
          renderItem={(data) => <DisplayCard vehicleData={data} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: "#000",
    zIndex: 5,
    elevation: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
