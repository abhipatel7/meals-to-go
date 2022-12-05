import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import * as Device from 'expo-device';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text>Search</Text>
        </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Device.osName === 'Android' ? StatusBar.currentHeight : 0,
  },
  search: {
    padding: 16,
    backgroundColor: 'green',
  },
  list: {
    padding: 16,
    flex: 1,
    backgroundColor: 'blue',
  },
});
