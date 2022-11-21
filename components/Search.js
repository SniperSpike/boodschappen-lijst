import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Filter from "./Filter";

const Search = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);
  const [filter, setFilter] = useState([
    "Lidl Nederland",
    "Lidl Duitsland",
    "Jumbo",
    "Aldi",
    "Albert heijn",
    "Kruidvat",
    "Op = Op",
  ]);

  const filterList = [
    "Lidl Nederland",
    "Lidl Duitsland",
    "Jumbo",
    "Aldi",
    "Albert heijn",
    "Kruidvat",
    "Op = Op",
  ];

  const onSearch = () => {
    setIsSearching(true);
    setIsFiltering(false);
  };
  const onBack = () => {
    setIsSearching(false);
  };
  const onFilter = () => {
    setIsFiltering(!isFiltering);
  };

  const addToArray = (item) => {
    setFilter([...filter, item]);
  };
  const removeFromArray = (item) => {
    setFilter((current) => current.filter((thing) => thing !== item));
  };

  return (
    <>
      <Pressable
        onPress={() => {
          onSearch();
        }}
      >
        <View style={styles.container}>
          <View style={styles.left}>
            {isSearching != true ? (
              <Pressable
                style={styles.filter}
                onPress={() => {
                  onFilter();
                }}
              >
                <Image
                  style={styles.image}
                  source={require(`../assets/hamburger.png`)}
                />
              </Pressable>
            ) : (
              <Pressable
                style={styles.filter}
                onPress={() => {
                  onBack();
                }}
              >
                <Image
                  style={styles.image}
                  source={require(`../assets/back.png`)}
                />
              </Pressable>
            )}
            {isSearching == true ? (
              <TextInput
                placeholder={"Zoek een product"}
                style={styles.searchText}
              ></TextInput>
            ) : (
              <Text style={styles.text}>Zoeken...</Text>
            )}
          </View>

          <Image
            style={styles.search}
            source={require(`../assets/search.png`)}
          />
        </View>
      </Pressable>
      {isFiltering == true ? (
        <View style={styles.filterContainer}>
          <Text style={styles.filterHeader}>Filter</Text>
          <View>
            {filterList.map((item, index) => {
              return filter.includes(item) ? (
                <Pressable
                  key={index}
                  onPress={() => {
                    removeFromArray(item);
                  }}
                >
                  <Filter bedrijf={item} active />
                </Pressable>
              ) : (
                <Pressable
                  key={index}
                  onPress={() => {
                    addToArray(item);
                  }}
                >
                  <Filter bedrijf={item} />
                </Pressable>
              );
            })}
          </View>
          <View style={styles.filterFooter}>
            <Text style={styles.filterFooterText}>Filter opties</Text>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 50,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
    position: "relative",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 16,
    height: 16,
    marginRight: 20,
    marginLeft: 10,
  },
  filter: {
    padding: 20,
    paddingLeft: 10,
    paddingRight: 0,
  },
  search: {
    width: 16,
    height: 16,
    marginRight: 10,
    position: "absolute",
    right: 10,
  },
  text: {
    height: 50,
    marginTop: 28,
  },
  searchText: {
    width: "84%",
    height: 50,
  },
  filterContainer: {
    height: 400,
    width: "100%",
    backgroundColor: "#F4F4F4",
    zIndex: 2,
    marginTop: 3,
  },
  filterHeader: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 13,
    fontWeight: "bold",
    fontSize: 16,
  },
  filterFooter: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 13,
  },
  filterFooterText: {
    fontWeight: "bold",
    fontSize: 14,
  },
});
