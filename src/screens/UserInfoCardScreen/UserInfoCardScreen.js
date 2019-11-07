// @flow

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  createAppContainer,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import CreateUserInfoCard from './CreateUserInfoCard';
import UpdateUserInfoCard from './UpdateUserInfoCard';

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
};

class UserInfoCardScreen extends Component<Props> {
  render() {
    const {navigate} = this.props.navigation;
    console.log('hello');

    return (
      <View style={styles.BlueView}>
        <CreateUserInfoCard navigate={navigate} />
        <UpdateUserInfoCard navigate={navigate} />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  create: CreateUserInfoCard,
  update: UpdateUserInfoCard,
});

const styles = StyleSheet.create({
  BlueView: {
    backgroundColor: '#dde6f6',
    flex: 1,
  },
});

export default createAppContainer(TabNavigator);
