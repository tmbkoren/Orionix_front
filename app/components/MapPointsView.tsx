import { View, StyleSheet, Modal } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Button from './Button';

type Props = {
  isVisible: boolean;
  onClose?: () => void;
  locations: any[]
};

export default function MapPointsView({
  locations,
  onClose,
  isVisible,
}: Props) {
  return (
    <View>
      <Modal
        animationType='fade'
        transparent={true}
        visible={isVisible}
        style={styles.modalContent}
      >
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 33.879914, // Center latitude
            longitude: -117.928749, // Center longitude
            latitudeDelta: 5, // Zoom level
            longitudeDelta: 5,
          }}
        >
          {locations.map((location) => {
            return (
              <Marker
                key={location.name}
                coordinate={{
                  latitude: location.geometry.location['lat'],
                  longitude: location.geometry.location['lng'],
                }}
                title={location.name}
                description={`Latitude: ${location.latitude}, Longitude: ${location.longitude}`}
              />
            );
          })}
        </MapView>
        <Button
          title='Close'
          onPress={onClose}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    width: '80%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute',
    top: '40%',
    left: '10%',
    gap: 20,
  },
  map: {
    flex: 1,
  },
});
