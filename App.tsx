import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
type ResultSectionProps = {
  label: string;
  value: string;
}

const Statistic = ({ label, value }: ResultSectionProps) => {
  return (
    <View>
      <Text style={styles.lable}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  )
};


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.values}>
        <Statistic label="Steps" value="10000" />
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

  lable: {
    color: 'white',
    fontSize: 20,
  },
  value: {
    fontSize: 45,
    color: '#AFB3BE',
    fontWeight: '500',
  },
});
