import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.firstArea}>
        <View style={styles.semafaro1}>
          <View style={styles.vermelho}></View>
          <View style={styles.amarelo}></View>
          <View style={styles.verde}></View>
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.secondArea}>
        <View style={styles.semafaro2}>
          <View style={styles.vermelho_2}></View>
          <View style={styles.amarelo_2}></View>
          <View style={styles.verde_2}></View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  firstArea: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#c8a2c8',
  },
  semafaro1: {
    flexDirection: 'column',
    backgroundColor: 'black',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 20,
    width: 150,
    height: 275,
  },
  vermelho: {
    backgroundColor: 'red',
    padding: 25,
    borderRadius: 55,
    height: 55,
    width: 55,
  },
  amarelo: {
    backgroundColor: 'yellow',
    padding: 25,
    borderRadius: 55,
    height: 55,
    width: 55,
  },
  verde: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 55,
    height: 55,
    width: 55,
  },
  secondArea: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#b0f2c2',
  },
  semafaro2: {
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 20,
    width: 275,
    height: 125,
  },
  vermelho_2: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 55,
    height: 55,
    width: 55,
  },
  amarelo_2: {
    backgroundColor: 'yellow',
    padding: 15,
    borderRadius: 55,
    height: 55,
    width: 55,
  },
  verde_2: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 55,
    height: 55,
    width: 55,
  },
});
