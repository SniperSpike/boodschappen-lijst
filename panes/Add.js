import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Bedrijf from "../components/Bedrijf";

const Add = () => {
  const navigation = useNavigation();
  const [active, setActive] = useState("Lidl DE");
  const [productNaam, setProductNaam] = useState(null);
  const [productPrijs, setProductPrijs] = useState(null);
  const [oudePrijs, setOudePrijs] = useState(0);
  const bedrijven = [
    "Lidl DE",
    "Jumbo",
    "Lidl NL",
    "Aldi",
    "Albert heijn",
    "Kruidvat",
    "Op = Op",
  ];

  const onSubmit = () => {
    if (productPrijs === null) {
      alert(`${productNaam} - €${parseInt(oudePrijs).toFixed(2)} - ${active}`);
    } else {
      alert(
        `${productNaam} - €${parseInt(productPrijs).toFixed(2)} - ${active}`
      );
    }
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={["rgba(132,99,226,0.50)", "#0066FF"]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={styles.top}>
        <Text style={styles.headerText}>Product toevoegen</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.inputSpan}>Product naam</Text>
          <View style={styles.searchField}>
            <TextInput
              style={styles.inputField}
              value={productNaam}
              onChangeText={setProductNaam}
              placeholder="Zoek een product..."
            ></TextInput>
            <Image
              style={styles.search}
              pointerEvents="none"
              source={require(`../assets/search.png`)}
            />
          </View>
        </View>
        <View style={styles.prijsGroup}>
          <View style={[styles.inputGroup, styles.prijsInputLeft]}>
            <Text style={styles.inputSpan}>Nieuwe prijs</Text>
            <TextInput
              style={styles.inputField}
              value={productPrijs}
              onChangeText={setProductPrijs}
              placeholder="€ 0.00"
              keyboardType="numeric"
            ></TextInput>
          </View>
          <View style={[styles.inputGroup, styles.prijsInputRight]}>
            <Text style={styles.inputSpan}>Oude prijs</Text>
            <Text style={styles.inputFieldPrijs} keyboardType="numeric">
              {"€ " + oudePrijs.toFixed(2)}
            </Text>
          </View>
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.inputSpan}>Bedrijf</Text>
          <View style={styles.bedrijven}>
            {bedrijven.map((item, index) => {
              return active == item ? (
                <Bedrijf key={index} naam={item} active={true} />
              ) : (
                <Pressable key={index} onPress={() => setActive(item)}>
                  <Bedrijf
                    naam={item}
                    active={false}
                    onPress={() => setActive(item)}
                  />
                </Pressable>
              );
            })}
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          style={[styles.btn, styles.opslaan]}
          onPress={() => onSubmit()}
        >
          <Text style={styles.btnTextOpslaan}>Opslaan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, styles.terug]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.btnTextTerug}>Terug</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 30,
    paddingTop: 40,
    justifyContent: "space-between",
  },
  headerText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
  },
  inputField: {
    width: "100%",
    backgroundColor: "white",
    height: 50,
    paddingLeft: 20,
  },
  inputFieldPrijs: {
    width: "100%",
    backgroundColor: "white",
    height: 50,
    paddingLeft: 20,
    paddingTop: 14,
  },
  inputSpan: {
    color: "white",
    marginBottom: 5,
  },
  inputGroup: {
    marginBottom: 20,
  },
  btn: {
    marginBottom: 10,
    height: 50,
    color: "green",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.46,

    elevation: 9,
  },
  btnTextOpslaan: {
    fontWeight: "bold",
    color: "#7774FF",
    fontSize: 16,
  },
  btnTextTerug: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 16,
  },
  opslaan: {
    backgroundColor: "#fff",
  },
  terug: {
    backgroundColor: "#7774FF",
  },
  bedrijven: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    flexStart: "left",
  },
  searchField: {
    position: "relative",
  },
  search: {
    position: "absolute",
    width: 16,
    height: 16,
    right: 20,
    top: "35%",
  },
  prijsGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  prijsInputLeft: {
    flex: 1,
    paddingRight: 5,
  },
  prijsInputRight: {
    flex: 1,
    paddingLeft: 5,
  },
});
