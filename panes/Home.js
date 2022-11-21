import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import db from "../firebase/firebase-config";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

export default function Home() {
  const navigation = useNavigation();
  // const [data, setData] = useState([]);

  const data = [
    {
      product: "Bier 0.0% 0.33 blik",
      prijzen: [
        {
          prijs: 0.29,
          bedrijf: "lidlde",
        },
        {
          prijs: 0.33,
          bedrijf: "lidlnl",
        },
        {
          prijs: 0.39,
          bedrijf: "jumbo",
        },
        {
          prijs: 0.41,
          bedrijf: "ah",
        },
        {
          prijs: 0.34,
          bedrijf: "aldi",
        },
      ],
    },
    {
      product: "Bier 0.0% 0.33 blik",
      prijzen: [
        {
          prijs: 0.33,
          bedrijf: "lidlnl",
        },
        {
          prijs: 0.39,
          bedrijf: "jumbo",
        },
        {
          prijs: 0.41,
          bedrijf: "ah",
        },
        {
          prijs: 0.34,
          bedrijf: "aldi",
        },
      ],
    },
    {
      product: "Bier 0.0% 0.33 blik",
      prijzen: [
        {
          prijs: 0.39,
          bedrijf: "jumbo",
        },
        {
          prijs: 0.41,
          bedrijf: "ah",
        },
        {
          prijs: 0.34,
          bedrijf: "aldi",
        },
      ],
    },
    {
      product: "Bier 0.0% 0.33 blik",
      prijzen: [
        {
          prijs: 0.21,
          bedrijf: "ah",
        },
        {
          prijs: 0.34,
          bedrijf: "aldi",
        },
      ],
    },
    {
      product: "Bier 0.0% 0.33 blik",
      prijzen: [
        {
          prijs: 0.21,
          bedrijf: "ah",
        },
      ],
    },
    {
      product: "Bier 0.0% 0.33 blik",
      prijzen: [
        {
          prijs: 0.29,
          bedrijf: "lidlde",
        },
        {
          prijs: 0.33,
          bedrijf: "lidlnl",
        },
        {
          prijs: 0.39,
          bedrijf: "jumbo",
        },
        {
          prijs: 0.41,
          bedrijf: "ah",
        },
        {
          prijs: 0.34,
          bedrijf: "aldi",
        },
      ],
    },
    {
      product: "Bier 0.0% 0.33 blik",
      prijzen: [
        {
          prijs: 0.33,
          bedrijf: "lidlnl",
        },
        {
          prijs: 0.39,
          bedrijf: "jumbo",
        },
        {
          prijs: 0.41,
          bedrijf: "ah",
        },
        {
          prijs: 0.34,
          bedrijf: "aldi",
        },
      ],
    },
    {
      product: "Bier 0.0% 0.33 blik",
      prijzen: [
        {
          prijs: 0.39,
          bedrijf: "jumbo",
        },
        {
          prijs: 0.41,
          bedrijf: "ah",
        },
        {
          prijs: 0.34,
          bedrijf: "aldi",
        },
      ],
    },
    {
      product: "Bier 0.0% 0.33 blik",
      prijzen: [
        {
          prijs: 0.21,
          bedrijf: "ah",
        },
        {
          prijs: 0.34,
          bedrijf: "aldi",
        },
      ],
    },
    {
      product: "Bier 0.0% 0.33 blik",
      prijzen: [
        {
          prijs: 0.21,
          bedrijf: "ah",
        },
      ],
    },
    {
      product: "Bier 0.0% 0.33 blik",
      prijzen: [
        {
          prijs: 0.29,
          bedrijf: "lidlde",
        },
        {
          prijs: 0.33,
          bedrijf: "lidlnl",
        },
        {
          prijs: 0.39,
          bedrijf: "jumbo",
        },
        {
          prijs: 0.41,
          bedrijf: "ah",
        },
        {
          prijs: 0.34,
          bedrijf: "aldi",
        },
      ],
    },
    {
      product: "Bier 0.0% 0.33 blik",
      prijzen: [
        {
          prijs: 0.33,
          bedrijf: "lidlnl",
        },
        {
          prijs: 0.39,
          bedrijf: "jumbo",
        },
        {
          prijs: 0.41,
          bedrijf: "ah",
        },
        {
          prijs: 0.34,
          bedrijf: "aldi",
        },
      ],
    },
    {
      product: "Bier 0.0% 0.33 blik",
      prijzen: [
        {
          prijs: 0.39,
          bedrijf: "jumbo",
        },
        {
          prijs: 0.41,
          bedrijf: "ah",
        },
        {
          prijs: 0.34,
          bedrijf: "aldi",
        },
      ],
    },
    {
      product: "Bier 0.0% 0.33 blik",
      prijzen: [
        {
          prijs: 0.21,
          bedrijf: "ah",
        },
        {
          prijs: 0.34,
          bedrijf: "aldi",
        },
      ],
    },
    {
      product: "Bier 0.0% 0.33 blik",
      prijzen: [
        {
          prijs: 0.21,
          bedrijf: "ah",
        },
      ],
    },
  ];

  // const colRef = collection(db, "Producten");

  // onSnapshot(colRef, (snapshot) => {
  //   let products = [];
  //   snapshot.docs.forEach((doc) => {
  //     products.push({ ...doc.data(), id: doc.id });
  //   });
  //   console.log(products);
  //   setData(products);
  // });

  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView style={styles.content}>
        {data?.map((item, index) => {
          return (
            <Product
              key={index}
              productNaam={item.product}
              extraData={item.prijzen}
            />
          );
        })}
      </ScrollView>
      <Pressable onPress={() => navigation.navigate("Product toevoegen")}>
        <LinearGradient
          style={styles.button}
          colors={["rgba(226,99,206,0.5)", "#0066FF"]}
          start={{ x: 0, y: 1.2 }}
          end={{ x: 1, y: 0 }}
        >
          <Text style={styles.buttonTekst}>+</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE",
  },
  content: {
    paddingVertical: 10,
    zIndex: 0,
  },
  button: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 27,
    right: 30,
    borderRadius: 50,
    zIndex: 3,
  },
  buttonTekst: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
    paddingHorizontal: 30,
    zIndex: 3,
  },
});
