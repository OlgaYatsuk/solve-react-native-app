// @flow

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import CreateUserInfoCard from './CreateUserInfoCard';
import UpdateUserInfoCard from './UpdateUserInfoCard';

type Props = {
  navigation: any,
};

class UserInfoCardScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.BlueView}>
        <CreateUserInfoCard />
        <UpdateUserInfoCard />
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
