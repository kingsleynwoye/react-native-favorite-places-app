import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';
// import { useEffect } from 'react';

import OutlinedButton from '../components/UI/OutlinedButton';
import { Colors } from '../constants/colors';

function PlaceDetails({route}) {

  //   const selectedPlaceId = route.params.placeId;

  //  useEffect(() => {

  //  }, [selectedPlaceId])

  return (
    <ScrollView>
      <Image style={styles.image}  />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{}</Text>
        </View>
        <View style={styles.fallback}>
        <Text>Loading place data...</Text>
      </View>
        <OutlinedButton icon="map">
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView> 
  );
}

export default PlaceDetails;

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%',
  },
  locationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});