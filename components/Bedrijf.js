import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Bedrijf = ({ naam, active }) => {
  return (
    <View style={styles.container}>
      {active == true ? (
        <Text style={[styles.text, styles.active]}>{naam}</Text>
      ) : (
        <Text style={styles.text}>{naam}</Text>
      )}
    </View>
  );
};

export default Bedrijf;

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    margin: 4,
  },
  text: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    backgroundColor: "#B1B0E0",
    borderRadius: 20,
    fontWeight: "bold",
    color: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  active: {
    backgroundColor: "#fff",
    color: "#7774FF",
  },
});
