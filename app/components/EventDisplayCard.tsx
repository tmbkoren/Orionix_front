import { View, Text, StyleSheet } from 'react-native';
import {Image } from 'expo-image';

type Props = {
  name: string;
  date: string;
  time: string;
  image: string
};

export default function EventDisplayCard({ name, date, time, image }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={{ width: 100, height: 100 }}
      />
      <View style={styles.textContainer}>
        <Text>{name}</Text>
        <Text>{date}</Text>
        <Text>{time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 1, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
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
    color: 'white',
  },
});
