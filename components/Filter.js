import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Filter = ({ bedrijf, active }) => {
  return (
    <View style={styles.container}>
      {active == true ? (
        <View style={[styles.toggle, styles.active]}>
          <Image
            style={styles.activeIcon}
            source={require("../assets/active.png")}
          />
        </View>
      ) : (
        <View style={styles.toggle}></View>
      )}

      <Text>{bedrijf}</Text>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
    marginVertical: 10,
  },
  toggle: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "#dadada",
    borderRadius: 5,
    backgroundColor: "#fff",
    marginRight: 15,
    marginLeft: 15,
  },
  active: {
    borderWidth: 0,
    backgroundColor: "#0066FF",
    justifyContent: "center",
    alignItems: "center",
  },
  activeIcon: {
    width: 14,
    height: 10,
  },
});
