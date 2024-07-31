import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ApiCallBodyPart } from "../Api/exerciseDB";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/MaterialIcons"; // Importing MaterialIcons
import ExercisesList from "../components/ExercisesList";
import { demoExercises } from "../constants/SliderImages";

const Exercises = () => {
  const item = useLocalSearchParams();
  const router = useRouter();

  const [exercises, setExercises] = useState(demoExercises);

  useEffect(() => {
    // if (item && item.name) {
    //   getBodyPartExercises(item.name);
    // }
  }, [item]);

  const getBodyPartExercises = async (bodyPart) => {
    const data = await ApiCallBodyPart(bodyPart);
    // console.log("got the data", data);
    setExercises(data);
  };

  return (
    <ScrollView>
      <StatusBar style="light" />
      <View style={styles.imageContainer}>
        <Image
          source={item.image} // Assuming item.image is a URL
          style={styles.image}
        />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Icon name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <View style={styles.exer}>
          <Text style={styles.exerName}>{item.name} Exercises</Text>

          <View>
            {exercises.length > 0 ? (
              <ExercisesList data={exercises} />
            ) : (
              <Text style={styles.noDataText}>No exercises found.</Text>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Exercises;

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
  },
  image: {
    width: wp(100),
    height: hp(45),
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 50,
    padding: 10,
    backgroundColor: "red",
  },
  exer: {
    marginTop: hp(2),
    marginLeft: hp(2),
  },
  exerName: {
    fontSize: hp(3),
    fontWeight: "bold",
  },
  noDataText: {
    textAlign: "center",
    marginTop: hp(2),
    color: "gray",
    fontSize: hp(2),
  },
});
