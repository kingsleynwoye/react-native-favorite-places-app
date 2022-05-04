import { FlatList, StyleSheet, Text, View } from 'react-native';

import { Colors } from '../../constants/colors';
import PlaceItem from './PlaceItem';
import {useNavigation} from "@react-navigation/native"

function PlacesList({ places }) {

  const navigation = useNavigation();

  // function selectPlaceHandler() {
  //    navigation.navigate("PlaceDeatls")
  // } 

  if (!places || places.length === 0 ) {
    if (places) {
      places.slice(places - 1)
    }
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No places added yet - start adding some!
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem place={item} />}
    />
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  list: {
    margin: 24,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});