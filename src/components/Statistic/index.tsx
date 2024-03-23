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
    
  export default Statistic;

  const styles = StyleSheet.create({
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