import React, { useState } from "react";
import { View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { DisplayCard } from "../components/DisplayCard";
import { Header } from "../components/Header";
import { HomeStyles, Styles } from "./HomeStyles";

export const Home: React.FC = () => {
  const [vehicleData, setVehicleData] = useState();
  const styles = StyleSheet.create(HomeStyles() as Styles);
  const vehicleURL = "https://myfakeapi.com/api/cars";

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
      <Header />
      <View style={styles.container}>
        <FlatList
          data={vehicleData}
          renderItem={(data) => <DisplayCard vehicleData={data} />}
        />
      </View>
    </SafeAreaView>
  );
};
