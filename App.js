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
import Card from './src/components/CardForm/Card';
import SuccessScreen from './src/components/SuccessScreen';
import UsersListContainer from './src/components/UsersList/UsersListContainer';
// import SwipeScreen from './src/components/SwipeScreen/SwipeScreen';
// import SelectedCandidatesContainer from './src/components/SwipeScreen/SelectedCandidates/SelectedCandidatesContainer';
// import SwipeContainer from './src/components/SwipeScreen/SwipeCard/SwipeCardContainer'

const RootStack = createStackNavigator(
  {
    WelcomeScreen: WelcomeScreen,
    SuccessScreen: SuccessScreen,
    Card: Card,
    UsersListContainer: UsersListContainer,
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
