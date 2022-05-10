import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderStyles } from "./HeaderStyles";

export const Header = () => {
  const styles = StyleSheet.create(HeaderStyles() as any);

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Finding Rides</Text>
    </View>
  );
};
