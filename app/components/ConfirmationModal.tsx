import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

export default function ConfirmationModal({ isVisible, onClose }: Props) {
  return (
    <View>
      <Modal
        animationType='fade'
        transparent={true}
        visible={isVisible}
      >
        <View style={styles.modalContent}>
          <Text>You are going to be asked to provide your location</Text>
          <Pressable onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>OK</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '10%'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#1a1a1a',
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
