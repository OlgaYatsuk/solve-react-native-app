/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import SwipeContainer from './src/components/SwipeScreen/SwipeContainer'
import WelcomeScreen from './src/components/WelcomeScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CardFormContainer from './src/components/CardForm/CardFormContainer';
import SuccessScreen from './src/components/SuccessScreen';
import CardFormInfo from './src/components/CardForm/components/CardFormInfo';

const RootStack = createStackNavigator(
  {
    SwipeContainer: SwipeContainer,
    WelcomeScreen: WelcomeScreen,
    CardFormContainer: CardFormContainer,
    SuccessScreen: SuccessScreen,
    CardFormInfo: CardFormInfo,
  },
  {
    initialRouteName: 'SwipeContainer',
  },
);

const AppContainer = createAppContainer(RootStack);

const App: () => React$Node = () => {
  return (
    <>
      <AppContainer />
    </>
  );
};

export default App;
