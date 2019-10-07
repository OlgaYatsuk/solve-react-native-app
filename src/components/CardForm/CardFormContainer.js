// @flow

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import CardFormInfo from './components/CardFormInfo';
import CardForm from './CardForm';

type State = {
  isCardFormInfoVisible: boolean,
  firstName?: string,
  lastName?: string,
  cardType?: string,
  cardNumber?: string,
  validationObjectStatus: boolean,
};

type Props = {};

class CardFormContainer extends Component<Props, State> {
  state = {
    isCardFormInfoVisible: false,
    firstName: undefined,
    lastName: undefined,
    cardType: undefined,
    cardNumber: undefined,
    validationObjectStatus: false,
  };

  handleFormDataSubmit = (
    firstName?: string,
    lastName?: string,
    cardNumber?: string,
    validationObjectStatus?: boolean,
    cardType?: string,
  ) => {
    this.setState({
      firstName,
      lastName,
      cardNumber,
      validationObjectStatus,
      cardType,
    });
  };

  handleCardTypeChange = (cardType?: string) => {
    this.setState({
      cardType,
    });
  };

  render() {
    const {
      firstName,
      lastName,
      cardType,
      cardNumber,
      validationObjectStatus,
    } = this.state;

    return (
      <View style={styles.BlueView}>
        <CardForm
          {...this.state}
          handleCardTypeChange={this.handleCardTypeChange}
          onFormDataSubmit={this.handleFormDataSubmit}
          onCardTypeChange={this.handleCardTypeChange}
        />

        <CardFormInfo
          validationObjectStatus={validationObjectStatus}
          firstName={firstName}
          lastName={lastName}
          cardType={cardType}
          cardNumber={cardNumber}
        />
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

export default CardFormContainer;
