import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import BodyParts from "../components/BodyParts";
// import Slider from "../components/Slider";

const Home = () => {
  const { height, width } = Dimensions.get("window");
  const SCREEN_HEIGHT = height;
  const SCREEN_width = width;

  const data = [
    { id: "2", imageUrl: require("../assets/images/slide2.png") },
    { id: "3", imageUrl: require("../assets/images/slide3.png") },
    { id: "4", imageUrl: require("../assets/images/slide4.png") },
    { id: "5", imageUrl: require("../assets/images/slide5.png") },
    { id: "1", imageUrl: require("../assets/images/slide1.png") },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {/* icons section */}
      <View style={styles.iconsSection}>
        <View style={styles.textContainer}>
          <Text style={styles.readyText}>Ready To</Text>
          <Text style={styles.workoutText}>Workout</Text>
        </View>

        <View style={styles.avatarContainer}>
          <Image
            source={require("../assets/images/avatar.png")}
            style={styles.avatar}
          />

          <View style={styles.notificationContainer}>
            <Ionicons name="notifications" size={hp(3)} color="gray" />
          </View>
        </View>
      </View>

      {/* image section */}

      <View>
        <FlatList
          contentContainerStyle={{ gap: 15, marginTop: 20 }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          data={data}
          horizontal
          renderItem={({ item }) => {
            return (
              <View>
                <Image
                  source={item.imageUrl}
                  // resizeMode="contain"
                  // height={SCREEN_HEIGHT /3}
                  // width={SCREEN_width / 5}
                  style={{
                    height: SCREEN_HEIGHT / 4,
                    width: 350,
                    resizeMode: "cover",
                    borderRadius: 20,
                    marginLeft: 25,
                  }}
                />
                {/* <Text>jakir ansari</Text> */}
              </View>
            );
          }}
        />
      </View>



      {/* body parts */}

      <View style={styles.bodyparts}>
        <BodyParts/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingBottom: hp(2), // space-y-10 equivalent
    paddingTop: 40,
  },
  iconsSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: wp(4),
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  readyText: {
    fontSize: hp(4.5),
    fontWeight: "900",
    letterSpacing: 1,
    color: "#4B5563", // text-neutral-700 equivalent
    textTransform: "uppercase",
  },
  workoutText: {
    fontSize: hp(4.5),
    fontWeight: "900",
    letterSpacing: 1,
    color: "#EF4444", // text-rose-500 equivalent
    textTransform: "uppercase",
  },
  avatarContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: wp(4),
  },
  avatar: {
    height: hp(5),
    width: wp(10),
    borderRadius: hp(3),
  },
  notificationContainer: {
    backgroundColor: "#E5E7EB", // bg-neutral-200 equivalent
    marginVertical: hp(1),
    borderWidth: 2,
    borderRadius: hp(3),
    borderColor: "#D1D5DB", // border-neutral-300 equivalent
    justifyContent: "center",
    alignItems: "center",
    padding: wp(2),
  },
  imageSection: {
    flex: 1,
  },
  bodyparts:{
    flex:1
  }
});

export default Home;



// import React, { useState, useRef, useEffect } from "react";
// import {
//   View,
//   Text,
//   SafeAreaView,
//   StatusBar,
//   Image,
//   StyleSheet,
//   Dimensions,
//   FlatList,
//   Animated,
// } from "react-native";
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from "react-native-responsive-screen";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import BodyParts from "../components/BodyParts";

// const Home = () => {
//   const { height, width } = Dimensions.get("window");
//   const SCREEN_HEIGHT = height;
//   const SCREEN_WIDTH = width;

//   const data = [
//     { id: "2", imageUrl: require("../assets/images/slide2.png") },
//     { id: "3", imageUrl: require("../assets/images/slide3.png") },
//     { id: "4", imageUrl: require("../assets/images/slide4.png") },
//     { id: "5", imageUrl: require("../assets/images/slide5.png") },
//     { id: "1", imageUrl: require("../assets/images/slide1.png") },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const flatListRef = useRef(null);
//   const scrollX = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => {
//         const nextIndex = (prevIndex + 1) % data.length;
//         flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
//         return nextIndex;
//       });
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar style="dark" />

//       {/* icons section */}
//       <View style={styles.iconsSection}>
//         <View style={styles.textContainer}>
//           <Text style={styles.readyText}>Ready To</Text>
//           <Text style={styles.workoutText}>Workout</Text>
//         </View>

//         <View style={styles.avatarContainer}>
//           <Image
//             source={require("../assets/images/avatar.png")}
//             style={styles.avatar}
//           />

//           <View style={styles.notificationContainer}>
//             <Ionicons name="notifications" size={hp(3)} color="gray" />
//           </View>
//         </View>
//       </View>

//       {/* image section */}
//       <View>
//         <Animated.FlatList
//           ref={flatListRef}
//           contentContainerStyle={{ gap: 15, marginTop: 20 }}
//           showsVerticalScrollIndicator={false}
//           showsHorizontalScrollIndicator={false}
//           pagingEnabled
//           data={data}
//           horizontal
//           onScroll={Animated.event(
//             [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//             { useNativeDriver: false }
//           )}
//           renderItem={({ item }) => (
//             <View style={styles.imageContainer}>
//               <Image source={item.imageUrl} style={styles.image} />
//             </View>
//           )}
//           keyExtractor={(item) => item.id}
//         />
//       </View>

//       {/* body parts */}
//       <View style={styles.bodyparts}>
//         <BodyParts />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     paddingBottom: hp(2),
//     paddingTop: 40,
//   },
//   iconsSection: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginHorizontal: wp(4),
//   },
//   textContainer: {
//     justifyContent: "center",
//     alignItems: "flex-start",
//   },
//   readyText: {
//     fontSize: hp(4.5),
//     fontWeight: "900",
//     letterSpacing: 1,
//     color: "#4B5563",
//     textTransform: "uppercase",
//   },
//   workoutText: {
//     fontSize: hp(4.5),
//     fontWeight: "900",
//     letterSpacing: 1,
//     color: "#EF4444",
//     textTransform: "uppercase",
//   },
//   avatarContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     marginHorizontal: wp(4),
//   },
//   avatar: {
//     height: hp(5),
//     width: wp(10),
//     borderRadius: hp(3),
//   },
//   notificationContainer: {
//     backgroundColor: "#E5E7EB",
//     marginVertical: hp(1),
//     borderWidth: 2,
//     borderRadius: hp(3),
//     borderColor: "#D1D5DB",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: wp(2),
//   },
//   imageContainer: {
//     width: SCREEN_WIDTH - 50,
//     height: SCREEN_HEIGHT / 4,
//     borderRadius: 20,
//     overflow: "hidden",
//     marginLeft: 25,
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//     resizeMode: "cover",
//   },
//   bodyparts: {
//     flex: 1,
//   },
// });

// export default Home;
