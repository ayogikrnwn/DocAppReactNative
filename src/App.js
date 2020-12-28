/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
import { Ruter } from './Router';
import FlashMessage from "react-native-flash-message";
import {Loading} from './components';

const App = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
    <NavigationContainer>
      <Ruter />
    </NavigationContainer>
    <FlashMessage position="top" />
    {loading && <Loading />}
    </>
  );
};

export default App;

