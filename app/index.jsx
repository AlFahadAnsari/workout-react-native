import React from "react";
import { View, Text, StatusBar, Image, TouchableOpacity, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image
        source={require("../assets/images/welcome.png")}
        style={styles.backgroundImage}
      />

      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={[styles.gradient, { width: wp(100), height: hp(105) }]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
      >
        <Animated.View
          entering={FadeInDown.delay(300).springify()}
          style={styles.header}
        >
          <Text style={[styles.headerText, { fontSize: hp(5) }]}>
            Best <Text style={styles.highlightText}>Workouts</Text>
          </Text>
          <Text style={[styles.headerText, { fontSize: hp(5) }]}>
            For You
          </Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(400).springify()}>
          <TouchableOpacity
            onPress={() => router.push("home")}
            style={[styles.button, { height: hp(7), width: wp(80) }]}
          >
            <Text style={[styles.buttonText, { fontSize: hp(3) }]}>
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
  },
  gradient: {
    justifyContent: "flex-end",
    paddingBottom: 12,
    paddingHorizontal: 8,
  },
  header: {
    alignItems: "center",
    marginBottom:20
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    letterSpacing: 1.5,
  },
  highlightText: {
    color: "#dc2626",
  },
  button: {
    backgroundColor: "#f43f5e",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: "#d4d4d8",
    marginHorizontal: "auto",
    marginBottom:20
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    letterSpacing: 2,
  },
});
