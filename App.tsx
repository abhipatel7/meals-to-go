import { Lato_400Regular } from "@expo-google-fonts/lato";
import { Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts } from "expo-font";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import "react-native-gesture-handler";

import { Navigation, theme } from "./src/infrastructure";
import { LocationContextProvider, RestaurantsContextProvider } from "./src/services";

/**
 * TODO: Add proper types instead of any
 * TODO: Refactor code
 */

const App = () => {
  const [isFontLoaded] = useFonts({
    Oswald_400Regular,
    Lato_400Regular,
  });

  if (!isFontLoaded) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default App;
