import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const ExercisesList = ({ data }) => {
  return (
    <View style={styles.mainDiv}>
      <View style={styles.listContent}>
        {data.map((item, index) => (
          <ExerCard key={item.name} item={item} />
        ))}
      </View>
    </View>
  );
};

const ExerCard = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('details', { params: item })}
    >
      <Image
        // source={require("../assets/images/upperArms.png")}
        // source={{ uri: item.gifUrl }}
        source={require("../assets/images/back.png")}
        style={styles.image}
      />
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardDetails}>{item.details}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainDiv: {
    marginLeft: 2,
    marginRight: 10,
    
  },
  listContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 60,
    paddingTop: 20,
  },
  card: {
    width: '45%', // Adjusted width considering margins and padding
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
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  cardDetails: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default ExercisesList;
