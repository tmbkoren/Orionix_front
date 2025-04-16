import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
  name: string;
  date: string;
  time: string;
  image: string
};

export default function EventDisplayCard({ name, date, time, image }: Props) {
  return (
    <LinearGradient
      colors={['#2c003e', '#4b0082', '#191970']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Image
        source={image}
        style={{ width: 100, height: 100 }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{date}</Text>
        <Text style={styles.text}>{time}</Text>
      </View>
    </LinearGradient>
  );
}

// batu yapti (partially):
const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#66FCF1',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    maxHeight: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 1,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    color: '#66FCF1',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
