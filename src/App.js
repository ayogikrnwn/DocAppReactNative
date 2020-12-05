/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Ruter } from './Router';
import FlashMessage from "react-native-flash-message";

const App = () => {
  return (
    <>
    <NavigationContainer>
      <Ruter />
    </NavigationContainer>
    <FlashMessage position="top" />
    </>
  );
};

export default App;

