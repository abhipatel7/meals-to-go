import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";

import { FavoritesScreen, SettingsScreen } from "../../features";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode: "screen",
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Settings Overview"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favorites" component={FavoritesScreen} />
    </SettingsStack.Navigator>
  );
};
