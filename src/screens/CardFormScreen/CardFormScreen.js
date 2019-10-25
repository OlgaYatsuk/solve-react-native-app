// @flow

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import CardForm from './CardForm';
import CardFormInfo from './CardFormInfo';

type Props = {
  navigation: any,
};

class CardFormScreen extends Component<Props> {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.BlueView}>
        <CardForm navigate={navigate} />
        <CardFormInfo />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  BlueView: {
    backgroundColor: '#dde6f6',
    flex: 1,
  },
});

export default CardFormScreen;
