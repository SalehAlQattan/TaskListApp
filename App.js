// react
import React from 'react';

// styled-components
import { ThemeProvider } from 'styled-components';

// native-base
import { NativeBaseProvider } from 'native-base';

// navigation
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './components/navigation';

// defining the theme
const theme = {
  backgroundColor: '#292929',
  color: '#bb86fd',
};

export default function App() {
  return (
    <NativeBaseProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
