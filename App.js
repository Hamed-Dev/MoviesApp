/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
import {
  StatusBar,
} from 'react-native';

/// import main navigation
import MainNavigation from './src/navigation/MainNavigation';

import colors from "./src/utils/colors";

import { Provider } from 'react-redux';
import { store } from './src/redux/store'


const App = () => {
  useEffect(() => {
 
  }, []);


  return (
    <>

      <StatusBar backgroundColor={colors.primary} />
      <Provider store={store}>
          <MainNavigation />
      </Provider>
    </>
  )
}



export default App;
