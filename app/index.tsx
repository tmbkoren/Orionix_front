import { Video } from 'expo-av';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import ConfirmationModal from './components/ConfirmationModal';
import { StatusBar } from 'expo-status-bar';

export default function Index() {
  console.log('Index page loaded');
  const router = useRouter();
  const [showModal, setShowModal] = useState<boolean>(false);
  const onClose = () => {
    setShowModal(false);
    router.navigate('/getLocation');
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Video
        source={require('@/assets/horizontal_blue.mp4')}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
        isLooping
        shouldPlay
        isMuted
      />
      
      <Text style={styles.text}>Welcome to Orionix.</Text>
      
      <Button
        title='Get Started'
        onPress={() => setShowModal(true)}
      />
      <ConfirmationModal
        isVisible={showModal}
        onClose={onClose}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'space-around',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    color: '#66FCF1',
    fontSize: 40,
    fontWeight: 'bold',
    letterSpacing: 2,
    textShadowColor: 'rgba(0, 255, 255, 0.7)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
});
