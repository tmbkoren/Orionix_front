import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Button from '../components/Button';
import * as Location from 'expo-location';
import LocationModal from '../components/LocationModal';
import EventDisplay from '../components/EventDisplay';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import WeatherDataDisplay from '../components/WeatherDataDisplay';
import Sorter from '../components/Sorter';
import MapPointsView from '../components/MapPointsView';

export default function GetLocationPage() {
  const [coordinates, setCoordinates] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [zipCode, setZipCode] = useState<string | undefined>(undefined);
  const [locationAllowed, setLocationAllowed] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const [events, setEvents] = useState<
    | {
        name: string;
        date: string;
        time: string;
        id: string;
        image: string;
      }[]
    | undefined
  >(undefined);
  const [sortedEvents, setSortedEvents] = useState<
    | {
        name: string;
        date: string;
        time: string;
        id: string;
        image: string;
      }[]
    | undefined
  >(events);
  const [sortType, setSortType] = useState<'by_date' | 'by_rarity'>(
    'by_rarity'
  );
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [currentWeatherData, setCurrentWeatherData] = useState<{
    weather_quality: string;
    weather_message: string;
    event_message: string;
  } | null>(null);
  const [pointsOfInterest, setPointsOfInterest] = useState<
    | {
        id: string;
        longitude: number;
        latitude: number;
        name: string;
      }[]
    | undefined
  >(undefined);
  const [showPointsOfInterest, setShowPointsOfInterest] =
    useState<boolean>(false);

  const sortEvents = (
    events: any[],
    sortType: string,
    sortDirection: string
  ) => {
    console.log(events);
    const sortedEvents =
      events &&
      [...events].sort((a, b) => {
        if (sortType === 'by_date') {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
        } else if (sortType === 'by_rarity') {
          const rarityA = a.rarity || 0; // Assuming events have a rarity property
          const rarityB = b.rarity || 0;
          return sortDirection === 'asc'
            ? rarityA - rarityB
            : rarityB - rarityA;
        }
        return 0; // Default case, no sorting
      });
    return sortedEvents;
  };

  const fetchPOIs = async () => {
    if (coordinates) {
      try {
        const response = await fetch(
          `${process.env.EXPO_PUBLIC_API_URL}/getNearbyPlaces?lat=${coordinates.latitude}&lon=${coordinates.longitude}`
        );
        const data = await response.json();
        console.log('Points of Interest:', data);
        setPointsOfInterest(data);
        setShowPointsOfInterest(true);
      } catch (error) {
        console.error('Error fetching points of interest:', error);
      }
    } else {
      try {
        const response = await fetch(
          `${process.env.EXPO_PUBLIC_API_URL}/getNearbyPlacesZip?zip_code=${zipCode}`
        );
        const data = await response.json();
        console.log('Points of Interest:', data);
        setPointsOfInterest(data);
        setShowPointsOfInterest(true);
      } catch (error) {
        console.error('Error fetching points of interest:', error);
      }
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === 'granted') {
        setLocationAllowed(true);
        try {
          const location = await Location.getCurrentPositionAsync({});
          setCoordinates(location.coords);
          console.log('Location:', location.coords);
          const weatherResData = await fetch(
            `${process.env.EXPO_PUBLIC_API_URL}/weatherDataByLocation?lat=${coordinates?.latitude}&lon=${coordinates?.longitude}`
          );
          const weatherData = await weatherResData.json();
          setCurrentWeatherData(weatherData);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      } else {
        setLocationAllowed(false);
        console.log('Permission to access location was denied');
      }
    })();
  }, []);

  useEffect(() => {
    const sorted = sortEvents(events, sortType, sortDirection);
    setSortedEvents(sorted);
  }, [events, sortType, sortDirection]);

  useEffect(() => {
    console.log(zipCode);
    if (zipCode) {
      console.log('Fetching weather data for zip code:', zipCode);
      const fetchWeatherData = async () => {
        try {
          const weatherResData = await fetch(
            `${process.env.EXPO_PUBLIC_API_URL}/weatherTypeByZip?zip_code=${zipCode}`
          );
          console.log('Weather response:', weatherResData);
          const weatherData = await weatherResData.json();
          console.log('Weather data:', weatherData);
          setCurrentWeatherData(weatherData);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };
      fetchWeatherData();
      const fetchEventData = async () => {
        try {
          const eventResData = await fetch(
            `${process.env.EXPO_PUBLIC_API_URL}/futureEvents`
          );
          const eventData = await eventResData.json();
          console.log('Event data:', eventData);
          setEvents(eventData);
        } catch (error) {
          console.error('Error fetching event data:', error);
        }
      };
      fetchEventData();
    }
  }, [zipCode]);

  useEffect(() => {
    console.log(coordinates);
    if (coordinates) {
      console.log('Fetching weather data for coordinates:', coordinates);
      const fetchWeatherData = async () => {
        try {
          const weatherResData = await fetch(
            `${process.env.EXPO_PUBLIC_API_URL}/weatherTypeByCoordinates?lat=${coordinates.latitude}&lon=${coordinates.longitude}`
          );
          console.log('Weather response:', weatherResData);
          const weatherData = await weatherResData.json();
          console.log('Weather data:', weatherData);
          setCurrentWeatherData(weatherData);
          setModalVisible(false);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };
      fetchWeatherData();
      const fetchEventData = async () => {
        try {
          const eventResData = await fetch(
            `${process.env.EXPO_PUBLIC_API_URL}/futureEvents`
          );
          const eventData = await eventResData.json();
          console.log('Event data:', eventData);
          setEvents(eventData);
        } catch (error) {
          console.error('Error fetching event data:', error);
        }
      };
      fetchEventData();
    }
  }, [coordinates]);

  return (
    <GestureHandlerRootView style={styles.container}>
      {currentWeatherData && (
        <WeatherDataDisplay weatherData={currentWeatherData} />
      )}
      {events ? (
        <View style={styles.eventContainer}>
          <Sorter
            sortType={sortType}
            setSortType={setSortType}
            sortDirection={sortDirection}
            setSortDirection={setSortDirection}
          />
          <EventDisplay events={sortedEvents} />
          <Button
            title={'Show nearby points of interest'}
            onPress={fetchPOIs}
          />
        </View>
      ) : (
        <Text style={styles.text}>No events found.</Text>
      )}
      <LocationModal
        isLocationAllowed={locationAllowed}
        onClose={() => setModalVisible(false)}
        isVisible={modalVisible}
        giveZipCode={setZipCode}
        giveCoordinates={setCoordinates}
        curCoordinates={coordinates}
      />
      {pointsOfInterest && showPointsOfInterest && (
        <MapPointsView
          locations={pointsOfInterest}
          onClose={() => setShowPointsOfInterest(false)}
        />
      )}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    backgroundColor: '#161317',
    padding: 20,
  },
  eventContainer: {
    flexShrink: 1,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  textInput: {
    height: 40,
    width: '15%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    color: 'white',
  },
});
