/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import WelcomeScreen from './src/screens/WelcomeScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CardFormScreen from './src/screens/CardFormScreen/CardFormScreen';
import SuccessScreen from './src/screens/SuccessScreen';
import {FlatListTest} from './src/screens/FlatList';
import UsersList from './src/screens/UsersListScreen';
import UserInfoCardScreen from './src/screens/UserInfoCardScreen/'
// import SwipeScreen from './src/components/SwipeScreen/SwipeScreen';
// import SelectedCandidatesContainer from './src/components/SwipeScreen/SelectedCandidates/SelectedCandidatesContainer';
// import SwipeContainer from './src/components/SwipeScreen/SwipeCard/SwipeCardContainer'

const RootStack = createStackNavigator(
  {
    WelcomeScreen: WelcomeScreen,
    SuccessScreen: SuccessScreen,
    Card: CardFormScreen,
    UsersList: UsersList,
    FlatListTest: FlatListTest,
    UserInfoCardScreen: UserInfoCardScreen
    // SwipeScreen: SwipeScreen,
  },
  {
    initialRouteName: 'UserInfoCardScreen',
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
