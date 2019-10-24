// @flow

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import CardFormContainer from './CardForm/CardFormContainer';
import CardFormInfoContainer from './CardFormInfo/CardFormInfoContainer';
type Props = {
  navigation: any,
};
type State = {};

class Card extends Component<Props, State> {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.BlueView}>
        <CardFormContainer navigate={navigate} />
        <CardFormInfoContainer />
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

export default Card;
