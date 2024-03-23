import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Statistic from './src/components/Statistic';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.values}>
        <Statistic label="Steps" value="1000" />
        <Statistic label="Distance" value="0,75 km" />
        <Statistic label="Flights Climed" value="10" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    padding: 12,
  },
  values: {
    flexDirection: 'row',
    gap: 20,
    flexWrap: 'wrap'
  },
});
