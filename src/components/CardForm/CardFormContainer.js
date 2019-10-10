// @flow

import React, {Component} from 'react';
import {View, Button, StyleSheet} from 'react-native';

import CardFormInfo from './components/CardFormInfo';
import CardForm from './CardForm';
import { NavigationScreenProps } from 'react-navigation';

type State = {
  isCardFormInfoVisible: boolean,
  firstName?: string,
  lastName?: string,
  cardType?: string,
  cardNumber?: string,
  validationObjectStatus: boolean,
};

type Props = NavigationScreenProps & {};

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
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.BlueView}>
        <CardForm
          cardType={cardType}
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
        {validationObjectStatus && (
          <Button
            title={"I'm ready"}
            onPress={() => {
              navigate('SuccessScreen');
            }}
          />
        )}
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
