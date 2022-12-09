import { Ionicons } from "@expo/vector-icons";
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ParamListBase, RouteProp } from "@react-navigation/native";

import { MapScreen } from "../../features";
import { FavoritesContextProvider, LocationContextProvider, RestaurantsContextProvider } from "../../services";

import { RestaurantsNavigator } from "./restaurants-navigator";
import { SettingsNavigator } from "./settings-navigator";

const Tab = createBottomTabNavigator();

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
  <FavoritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsNavigator} />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavoritesContextProvider>
);
