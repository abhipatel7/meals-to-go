import { Lato_400Regular } from "@expo-google-fonts/lato";
import { Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts } from "expo-font";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { initializeApp } from "firebase/app";
import { ThemeProvider } from "styled-components/native";

import "react-native-gesture-handler";

import { Navigation, theme } from "./src/infrastructure";
import { AuthenticationContextProvider } from "./src/services/authentication";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDf47pMMdmSR-lHid8oEc5hk7d6AyhhvOs",
  authDomain: "meals-to-go-6ae2a.firebaseapp.com",
  projectId: "meals-to-go-6ae2a",
  storageBucket: "meals-to-go-6ae2a.appspot.com",
  messagingSenderId: "690984882146",
  appId: "1:690984882146:web:269bf66b7cda3b65bef3bb",
  measurementId: "G-8WZ5N2W80D",
};

initializeApp(firebaseConfig);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

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
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default App;
