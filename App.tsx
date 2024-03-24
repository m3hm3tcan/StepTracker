import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Statistic from './src/components/Statistic';
import RingProgress from './src/components/RingProgress';
import {
  initialize,
  requestPermission,
  readRecords,
} from 'react-native-health-connect';
import { useState } from 'react';


const readSampleData = () => {
  readRecords('ActiveCaloriesBurned', {
    timeRangeFilter: {
      operator: 'between',
      startTime: '2023-01-09T12:00:00.405Z',
      endTime: '2023-01-09T23:53:15.405Z',
    },
  }).then((result) => {
    console.log('Retrieved records: ', JSON.stringify({ result }, null, 2)); // Retrieved records:  {"result":[{"startTime":"2023-01-09T12:00:00.405Z","endTime":"2023-01-09T23:53:15.405Z","energy":{"inCalories":15000000,"inJoules":62760000.00989097,"inKilojoules":62760.00000989097,"inKilocalories":15000},"metadata":{"id":"239a8cfd-990d-42fc-bffc-c494b829e8e1","lastModifiedTime":"2023-01-17T21:06:23.335Z","clientRecordId":null,"dataOrigin":"com.healthconnectexample","clientRecordVersion":0,"device":0}}]}
  });
};

export default function App() {

  readSampleData();
  return (
    <View style={styles.container}>
      <RingProgress radius={150} progress={0.1}/>

      <View style={styles.values}>
        <Statistic label="Steps" value="10100" />
        <Statistic label="Distance" value="0,75 km" />
        <Statistic label="Flights Climed" value="11" />
        {/* <Text>{datam}</Text> */}
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
    flexWrap: 'wrap',
    marginTop: 100,
  },
});
