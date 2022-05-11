import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { CardLayoutProps, Styles } from "./CardLayoutInterface";
import { CardLayoutStyles } from "./CardLayoutStyles";

export const CardLayout = ({ year, make, model, price }: CardLayoutProps) => {
  const styles = StyleSheet.create(CardLayoutStyles() as Styles);
  const vehicleDetails = year + " " + make + " " + model;

  return (
    <View style={styles.detailsContainer}>
      <View style={styles.detailWrapper}>
        <Text style={{ fontWeight: "bold" }}>Costa Mesa</Text>
        <Text> California</Text>
      </View>
      <View style={styles.detailWrapper}>
        <Text style={{ fontWeight: "bold" }}>{vehicleDetails}</Text>
      </View>
      <View style={styles.detailWrapper}>
        <Text style={{ fontWeight: "bold" }}>{price}</Text>
        <Text>/day</Text>
      </View>
    </View>
  );
};
