import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { bodyPart } from "../constants/SliderImages";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function BodyParts() {
  const router = useRouter();
  return (
    <View style={styles.mainDiv}>
      <Text style={styles.heading}>Exercises</Text>

      <FlatList
        data={bodyPart}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item, index }) => (
          <BodyPartCard key={index} router={router} item={item} />
        )}
      />
    </View>
  );
}

const BodyPartCard = ({ item, router, index }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push({ pathname: "/exersice", params: item })}
    >
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.9)"]}
        style={styles.gradient}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />
      <Text style={styles.text}>{item?.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainDiv: {
    marginLeft: 15,
    marginRight: 15,
  },
  heading: {
    fontSize: hp(3),
    fontWeight: "600",
    color: "#4a4a4a",
  },
  listContent: {
    paddingBottom: 50,
    paddingTop: 20,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  card: {
    width: wp(44),
    height: wp(52),
    display: "flex",
    justifyContent: "flex-end",
    padding: 4,
    marginBottom: 4,
    borderRadius: 40,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    position: "absolute",
  },
  gradient: {
    width: "100%",
    height: "50%",
    position: "absolute",
    bottom: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  text: {
    fontSize: hp(2.2),
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
