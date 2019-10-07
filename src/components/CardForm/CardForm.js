// @flow

import React, {Component} from 'react';
import {
  Text,
  TouchableHighlight,
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import cn from 'react-native-classnames';

import CardFormDetails from './components/CardFormDetails';

//rules for validation
const validationRegEx = {
  CVV: '^[0-9]{3,4}$',
  firstName: '[a-zA-Z]',
  lastName: '[a-zA-Z]',
  secretQuestion: '[a-zA-Z]',
  expirationDate: '^[0-9]{4}$',
  secretAnswer: '[a-zA-Z]',
};

type Props = {
  onCardTypeChange: (v1?: string) => void,
  onFormDataSubmit: (
    v1?: string,
    v2?: string,
    v3?: string,
    v4: boolean,
    v5?: string,
  ) => void,
};

type isInputFieldValid = {
  [key: string]: boolean,
};

type State = {
  isFormValid: boolean,
  isSubmiting: boolean,
  isCardFormDetailsWindowVisible: boolean,
  isInputFieldValid: isInputFieldValid,
  firstName?: string,
  lastName?: string,
  cardNumber?: string,
  CVV?: string,
  isSubmiting: boolean,
  cardType?: string,
  secretQuestion?: string,
  secretAnswer?: string,
};

class CardForm extends Component<Props, State> {
  state = {
    isFormValid: false,
    isSubmiting: false,
    cardNumber: undefined,
    cardType: undefined,
    firstName: undefined,
    lastName: undefined,
    isCardFormDetailsWindowVisible: false,

    isInputFieldValid: {
      firstName: false,
      lastName: false,
      CVV: false,
      secretQuestion: false,
      secretAnswer: false,
    },
  };

  handleCardFormInputChange = (name: string) => (
    event: SyntheticEvent<HTMLInputElement>,
  ) => {
    const value = event.nativeEvent.text;
    const regex = new RegExp(validationRegEx[name]);

    this.setState({
      [name]: value,
      isInputFieldValid: {
        ...this.state.isInputFieldValid,
        [name]: regex.test(value),
      },
    });
  };

  handleSubmit = () => {
    const {firstName, lastName, cardNumber, cardType} = this.state;
    const validationObjectStatus = Object.values(
      this.state.isInputFieldValid,
    ).every(value => value === true);

    this.setState(
      {
        isSubmiting: true,
        isFormValid: validationObjectStatus,
      },
      () => {
        this.props.onFormDataSubmit(
          firstName,
          lastName,
          cardNumber,
          validationObjectStatus,
          cardType,
        );
      },
    );
  };

  handleCardTypeChange = (cardType?: string) => {
    this.setState(
      {
        cardType,
      },
      () => {
        this.props.onCardTypeChange(cardType);
      },
    );
  };

  getInputClassName = (name: string) => {
    return cn(styles, 'Input', {
      InputError: this.state.isSubmiting && !this.state.isInputFieldValid[name],
      null: this.state.isSubmiting && this.state.isInputFieldValid[name],
    });
  };

  render() {
    const {isFormValid, isSubmiting, cardNumber} = this.state;
    return (
      <SafeAreaView>
        <View style={styles.Form} onSubmit={e => e.preventDefault()}>
          <TextInput
            type="text"
            mask="9999 9999 9999 9999"
            placeholder="Credit card number"
            style={this.getInputClassName('cardNumber')}
            name="cardNumber"
            onChange={this.handleCardFormInputChange('cardNumber')}
          />
          <View className="CardForm__flex-wrapper">
            <TextInput
              type="text"
              mask="99/99"
              name="expirationDate"
              style={this.getInputClassName('expirationDate')}
              onChange={this.handleCardFormInputChange('expirationDate')}
              placeholder="Expiration Date"
            />
            <TextInput
              type="text"
              name="CVV"
              placeholder="CVV"
              style={this.getInputClassName('CVV')}
              onChange={this.handleCardFormInputChange('CVV')}
            />
          </View>
          <View className="CardForm__flex-wrapper">
            <TextInput
              type="text"
              name="firstName"
              placeholder="First Name"
              style={this.getInputClassName('firstName')}
              onChange={this.handleCardFormInputChange('firstName')}
            />
            <TextInput
              type="text"
              name="lastName"
              placeholder="Last Name"
              style={this.getInputClassName('lastName')}
              onChange={this.handleCardFormInputChange('lastName')}
            />
            <TextInput
              type="text"
              name="secretQuestion"
              placeholder="Secret question"
              style={this.getInputClassName('secretQuestion')}
              onChange={this.handleCardFormInputChange('secretQuestion')}
            />
            <TextInput
              type="text"
              name="secretAnswer"
              placeholder="Secret answer"
              style={this.getInputClassName('secretAnswer')}
              onChange={this.handleCardFormInputChange('secretAnswer')}
            />
          </View>
          <TouchableHighlight style={styles.Button} onPress={this.handleSubmit}>
            <Text style={styles.ButtonText}>Submit</Text>
          </TouchableHighlight>
        </View>
        {isFormValid && isSubmiting && (
          <CardFormDetails
            onCardTypeChange={this.handleCardTypeChange}
            cardNumber={cardNumber}
          />
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  Form: {
    alignItems: 'stretch',
    padding: 30,
    width: '100%',
  },

  Input: {
    fontSize: 16,
    padding: 10,
    borderRadius: 8,
    marginTop: 15,
    backgroundColor: '#fff',
  },

  InputError: {
    borderColor: 'red',
    borderWidth: 1,
  },

  Button: {
    backgroundColor: '#0000d0',
    borderRadius: 8,
    padding: 13,
    marginTop: 15,
  },

  ButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },

  FormTitle: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20,
    lineHeight: 1.3,
  },
});

export default CardForm;
