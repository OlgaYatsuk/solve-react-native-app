/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
// import SwipeContainer from './src/components/SwipeScreen/SwipeCard/SwipeCardContainer'
import WelcomeScreen from './src/components/WelcomeScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Card from './src/components/CardForm/Card';
import SuccessScreen from './src/components/SuccessScreen';
import CardFormInfo from './src/components/CardForm/CardFormInfo/CardFormInfo';
// import SwipeScreen from './src/components/SwipeScreen/SwipeScreen';
// import SelectedCandidatesContainer from './src/components/SwipeScreen/SelectedCandidates/SelectedCandidatesContainer';

const RootStack = createStackNavigator(
  {
    // SwipeContainer: SwipeContainer,
    WelcomeScreen: WelcomeScreen,
    SuccessScreen: SuccessScreen,
    Card: Card,
    // SwipeScreen: SwipeScreen,
  },
  {
    initialRouteName: 'WelcomeScreen',
  },
);
//
const AppContainer = createAppContainer(RootStack);

const App: () => React$Node = () => {
  return (
    <>
      <AppContainer />
    </>
  );
};

export default App;
