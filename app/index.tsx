import { ImageBackground } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import ConfirmationModal from './components/ConfirmationModal';

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
      <ImageBackground
        source={require('@/assets/images/bg_gif.gif')}
        style={styles.background}
      >
        <Text style={styles.text}>Welcome!</Text>
        <Button
          title='Get Started'
          onPress={() => setShowModal(true)}
        />
      </ImageBackground>
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
    color: 'white',
    fontSize: 24,
  },
});
