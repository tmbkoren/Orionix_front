import { View, StyleSheet, Text } from "react-native";
import EventDisplayCard from "./EventDisplayCard";
import { FlatList } from "react-native-gesture-handler";

type Props = {
    events: {
        name: string;
        date: string;
        time: string;
        id: string;
        image: string;
    }[]
}

export default function EventDisplay({events}: Props) {
    return (
      <View style={styles.container}>
        <FlatList
          data={events}
          renderItem={({ item }) => (
            <EventDisplayCard
              name={item.name}
              date={item.date}
              time={item.time}
              image={item.image}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});