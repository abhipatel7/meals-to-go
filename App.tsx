import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';
import { Oswald_400Regular } from '@expo-google-fonts/oswald';
import { Lato_400Regular } from '@expo-google-fonts/lato';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { RestaurantsScreen } from './src/features';
import { theme } from './src/infrastructure';
import { SafeArea } from './src/components';
import { LocationContextProvider, RestaurantsContextProvider } from './src/services';

/**
 * TODO: Add proper types instead of any
 */

const Tab = createBottomTabNavigator();

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Map: 'md-map',
  Settings: 'md-settings',
};

const screenOptions: (props: { route: RouteProp<ParamListBase, string>; navigation: any }) => BottomTabNavigationOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name as 'Restaurants' | 'Map' | 'Settings'];
  return {
    tabBarIcon: ({ size, color }: { size: number; color: string }) => <Ionicons name={iconName as any} size={size} color={color} />,
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  };
};

const App = () => {
  const [isFontLoaded] = useFonts({
    Oswald_400Regular,
    Lato_400Regular,
  });

  if (!isFontLoaded) return null;

  const Tabs = () => {
    return (
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Map" component={Map} />
      </Tab.Navigator>
    );
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tabs />
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default App;
