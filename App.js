import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { ResturantsScreens } from './src/components/features/restaurants/screens/restaurants.screen';
import { theme } from './src/infrastructure/theme';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResturantsScreens />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
