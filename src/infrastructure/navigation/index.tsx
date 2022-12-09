import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthenticationContext } from "../../services";

import { AccountNavigator } from "./account-navigator";
import { AppNavigator } from "./app-navigator";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return <NavigationContainer>{isAuthenticated ? <AppNavigator /> : <AccountNavigator />}</NavigationContainer>;
};
