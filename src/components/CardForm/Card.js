import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import CardFormContainer from './CardForm/CardFormContainer';
import CardFormInfoContainer from './CardFormInfo/CardFormInfoContainer';
type Props = {};
type State = {};

class Card extends Component<Props, State> {
  render() {
    return (
        <View style={styles.BlueView}>
          <CardFormContainer />
          <CardFormInfoContainer />
        </View>
    );
  }
}
const styles = StyleSheet.create({
  BlueView: {
    backgroundColor: '#dde6f6',
    flex: 1
  }
});

export default Card;
