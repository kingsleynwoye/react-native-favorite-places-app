import PlaceForm from '../components/Places/PlaceForm';

function AddPlace({ navigation }) {
  async function createPlaceHandler(place) {
  
    navigation.navigate('AllPlaces', {
      place: place
    });
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;