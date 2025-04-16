import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';

type Props = {
  sortType: 'by_date' | 'by_rarity';
  setSortType: (type: 'by_date' | 'by_rarity') => void;
  sortDirection: 'asc' | 'desc';
  setSortDirection: (direction: 'asc' | 'desc') => void;
};

export default function Sorter(props: Props) {
  return (
    <View style={styles.container}>
      <Button
        title={props.sortType === 'by_date' ? 'Sort by Rarity' : 'Sort by Date'}
        onPress={
          props.sortType === 'by_date'
            ? () => props.setSortType('by_rarity')
            : () => props.setSortType('by_date')
        }
      />
      <Button
        title={
          props.sortDirection === 'asc' ? 'Sort Descending' : 'Sort Ascending'
        }
        onPress={
          props.sortDirection === 'asc'
            ? () => props.setSortDirection('desc')
            : () => props.setSortDirection('asc')
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  text: {
    color: 'white',
  },
});
