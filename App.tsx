import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
type ResultSectionProps = {
  label:string;
  value:string;
}

const ResultSection = ({label, value}:ResultSectionProps) => {
  return (
    <View style={styles.valueContainer}>
      <Text style={styles.lable}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  )
};


export default function App() {
  return (
    <View style={styles.container}>


      <View style={{ flexDirection: 'row' }}>

        <ResultSection label="Steps" value="10000" />

        <ResultSection label="Steps" value="0,75 km" />
        {/* <View>
          <Text style={styles.lable}>Distance</Text>
          <Text style={styles.value}>4,75 km</Text>
        </View> */}
      </View>

      <ResultSection label="Flights Climed" value="10" />


      {/* <View>
        <Text style={styles.lable}>Flights Climed</Text>
        <Text style={styles.value}>10</Text>
      </View> */}

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
  valueContainer: {
    marginRight: 50,
    fontSize: 20,
  },
  lable: {
    color: 'white',
    fontSize: 20,
  },
  value: {
    fontSize: 35,
    color: '#AFB3BE',
    fontWeight: '500',
  },
});
