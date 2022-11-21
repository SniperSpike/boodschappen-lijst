import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Search from "./Search";

const Navbar = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={["rgba(226,99,206,0.5)", "#0066FF"]}
      start={{ x: 0, y: 1.2 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={styles.navBox}>
        <Text style={styles.navTekst}>Boodschappen lijst</Text>
        <Search />
      </View>
    </LinearGradient>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 150,
    position: "relative",
  },
  navBox: {
    marginHorizontal: 30,
    // position: "absolute",
    bottom: 20,
    marginTop: 60,
  },
  navTekst: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
  },
});
