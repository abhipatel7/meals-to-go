import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, ParamListBase, RouteProp } from "@react-navigation/native";

import { SafeArea } from "../../components";
import { MapScreen } from "../../features";

import { RestaurantsNavigator } from "./restaurants-navigator";

const Tab = createBottomTabNavigator();

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const screenOptions: (props: { route: RouteProp<ParamListBase, string> }) => BottomTabNavigationOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name as "Restaurants" | "Map" | "Settings"];
  return {
    tabBarIcon: ({ size, color }: { size: number; color: string }) => <Ionicons name={iconName as any} size={size} color={color} />,
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    headerShown: false,
  };
};

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
);
