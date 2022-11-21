import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";

const Product = ({ productNaam, extraData }) => {
  const [toggle, setToggle] = useState(false);

  // const newArray = [];
  // console.log(extraData.prijzen);
  // Object.entries(extraData.prijzen).forEach((entry) => {
  //   const [key, value] = entry;
  //   newArray.push({ prijs: value, bedrijf: key });
  // });

  const products = extraData.sort(function (a, b) {
    return parseFloat(a.prijs) - parseFloat(b.prijs);
  });

  const getBedrijf = (bedrijfNaam) => {
    switch (bedrijfNaam) {
      case "lidlnl":
        // code block
        return require(`../assets/lidlnl.png`);
      case "lidlde":
        // code block
        return require(`../assets/lidlde.png`);
      case "jumbo":
        // code block
        return require(`../assets/jumbo.png`);
      case "ah":
        // code block
        return require(`../assets/ah.png`);
      case "opisop":
        // code block
        return require(`../assets/opisop.png`);
      case "kruidvat":
        // code block
        return require(`../assets/kruidvat.png`);
      case "aldi":
        // code block
        return require(`../assets/aldi.png`);
      default:
      // code block
    }
  };

  const pressed = () => {
    if (extraData.length > 1) setToggle(!toggle);
  };

  return (
    <>
      {/* touchable button voor dropdown */}
      <Pressable
        onPress={() => {
          pressed();
        }}
      >
        <View style={styles.container}>
          <View style={styles.left}>
            <Image
              style={styles.image}
              source={getBedrijf(products[0].bedrijf)}
            />
            <Text style={styles.product}>{productNaam}</Text>
          </View>
          {products.length > 1 ? (
            <Text style={[styles.prijs, styles.laagstePrijs]}>
              €{products[0].prijs}
            </Text>
          ) : (
            <Text style={styles.prijs}>€{products[0].prijs}</Text>
          )}
        </View>
      </Pressable>

      {/* Dropdown */}
      {toggle == true ? (
        <View style={styles.dropdown}>
          {products?.map((item, index) => {
            if (index == 0) return;
            return (
              <View key={index} style={styles.extraContainer}>
                <View style={styles.left}>
                  <Image
                    style={styles.image}
                    source={getBedrijf(item.bedrijf)}
                  />
                  <Text style={styles.extraProduct}>{productNaam}</Text>
                </View>
                <Text style={[styles.prijs, styles.hoogstePrijs]}>
                  €{item.prijs}
                </Text>
              </View>
            );
          })}
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    height: 60,
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 12,
    paddingHorizontal: 10,
  },
  left: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  extraProduct: {
    color: "#BFBFBF",
  },
  prijs: {},
  image: {
    width: 45,
    height: 45,
    resizeMode: "contain",
    marginRight: 20,
  },
  extraContainer: {
    height: 60,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 12,
    paddingHorizontal: 10,
    marginTop: -10,
  },
  dropdown: {
    height: "auto",
    backgroundColor: "#fff",
    marginBottom: 10,
    fontSize: 12,
    marginHorizontal: 10,
    opacity: 0.7,
  },
  hoogstePrijs: {
    color: "#FF0000",
  },
  laagstePrijs: {
    color: "#309500",
  },
});
