import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const ExercisesList = ({ data, router }) => {
  return (
    <View style={styles.mainDiv}>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => <ExerCard item={item} router={router} />}
      />
    </View>
  );
};

const ExerCard = ({ item, router }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => router.push(`/details/${item.name}`)}>
      <Image source={item.name} style={styles.image} />
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardDetails}>{item.details}</Text>
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
    marginBottom: 20,
  },
  listContent: {
    paddingBottom: 60,
    paddingTop: 20,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 5,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: wp(40),
    height: hp(20),
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: hp(2.2),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  cardDetails: {
    fontSize: hp(1.8),
    color: '#666',
    textAlign: 'center',
  },
});

export default ExercisesList;
 