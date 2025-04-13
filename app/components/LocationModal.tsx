import { View, Text, StyleSheet, Modal, TextInput } from 'react-native';
import Button from './Button';
import { useState } from 'react';

type Props = {
  isLocationAllowed: boolean;
  onClose: () => void;
  isVisible: boolean;
  zipCode: string | undefined;
  giveZipCode: (zip: string) => void;
  giveCoordinates: ({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) => void;
  curCoordinates: {
    latitude: number;
    longitude: number;
  } | null;
};

export default function LocationModal({
  isLocationAllowed,
  onClose,
  isVisible,
  zipCode,
  giveZipCode,
  giveCoordinates,
  curCoordinates,
}: Props) {
  const [curZipCode, setCurZipCode] = useState<string>('');
  const [latlon, setLatlon] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  return (
    <View>
      <Modal
        animationType='fade'
        transparent={true}
        visible={isVisible}
        style={styles.modalContent}
      >
        {!isLocationAllowed && (
          <View style={styles.modalContent}>
            <Text style={styles.text}>
              Please enter your zip code to find events near you:
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder='Zip Code'
              placeholderTextColor='white'
              keyboardType='numeric'
              value={zipCode}
              onChangeText={setCurZipCode}
              maxLength={5}
            />
            <Button
              title='Find Events'
              onPress={() => {
                giveZipCode(curZipCode);
                onClose();
              }}
            />
          </View>
        )}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
  },
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
  textInput: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    color: 'white',
  },
});
