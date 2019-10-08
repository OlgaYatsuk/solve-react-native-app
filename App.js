/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import WelcomeScreen from './src/components/WelcomeScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CardFormContainer from './src/components/CardForm/CardFormContainer';
import SuccessScreen from './src/components/SuccessScreen';
import CardFormInfo from './src/components/CardForm/components/CardFormInfo';

const RootStack = createStackNavigator(
  {
    WelcomeScreen: WelcomeScreen,
    CardFormContainer: CardFormContainer,
    SuccessScreen: SuccessScreen,
    CardFormInfo: CardFormInfo,
  },
  {
    initialRouteName: 'WelcomeScreen',
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
