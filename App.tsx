import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import { useFonts } from 'expo-font';
import { Oswald_400Regular } from '@expo-google-fonts/oswald';
import { Lato_400Regular } from '@expo-google-fonts/lato';

import { RestaurantsScreen } from './src/features';
import { theme } from './src/infrastructure/theme';

const App = () => {
  const [isFontLoaded] = useFonts({
    Oswald_400Regular,
    Lato_400Regular,
  });

  if (!isFontLoaded) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default App;
