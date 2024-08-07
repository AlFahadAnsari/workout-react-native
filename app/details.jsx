import { View, Text } from "react-native";
import React from "react";
import {  useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";

const Details = () => {
  const item = useLocalSearchParams();
  
  console.log("you got " + item[0]?.bodyPart)

  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <Image
          source={{ uri: item.gifUrl }}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = {
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 40,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
};

export default Details;
