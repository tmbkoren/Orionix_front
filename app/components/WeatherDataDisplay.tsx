import { View, Text, StyleSheet } from 'react-native';

type Props = {
  weatherData: {
    weather_quality: string;
    weather_message: string;
    event_message: string;
  };
};

export default function WeatherDataDisplay({ weatherData }: Props) {
  const getIconByQuality = (quality: string) => {
    if (quality === 'Poor') {
      return '☁️';
    } else if (quality === 'Decent') {
      return '🌤️';
    } else if (quality === 'Excellent') {
      return '☀️';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {getIconByQuality(weatherData.weather_quality)}
        {weatherData.weather_message}
      </Text>
      <Text style={styles.text}>
        {weatherData.event_message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 5,
    borderRadius: 8,
    elevation: 1, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});
