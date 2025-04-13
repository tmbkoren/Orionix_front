import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Button from './Button';

type Props = {
    onClose?: () => void;
    locations: {
        id: string;
        longitude: number;
        latitude: number;
        name: string;
    }[]
}

export default function MapPointsView ({locations, onClose}: Props) {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 36.7783, // Center latitude
          longitude: -119.4179, // Center longitude
          latitudeDelta: 5, // Zoom level
          longitudeDelta: 5,
        }}
      >
        {locations.map((location) => (
          <Marker
            key={location.id}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title={location.name}
            description={`Latitude: ${location.latitude}, Longitude: ${location.longitude}`}
          />
        ))}
      </MapView>
      <Button title='Close' onPress={onClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
