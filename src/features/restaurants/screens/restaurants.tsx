import { SafeAreaView, View, StatusBar, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import * as Device from 'expo-device';
import React from 'react';
import { RestaurantsInfo } from '../components';

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <RestaurantsInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Device.osName === 'Android' ? StatusBar.currentHeight : 0,
  },
  search: {
    padding: 16,
  },
  list: {
    padding: 16,
    flex: 1,
    backgroundColor: 'blue',
  },
});
