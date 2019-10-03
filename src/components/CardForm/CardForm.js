import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Text, SafeAreaView, View, Button, TextInput} from 'react-native';

import CardFormDetails from "./components/CardFormDetails";

//rules for validation
const validationRegEx = {
  CVV: '^[0-9]{3,4}$',
  FirstName: '[a-zA-Z]',
  lastName: '[a-zA-Z]',
  secretQuestion: '[a-zA-Z]',
  secretAnswer: '[a-zA-Z]'
};

class CardForm extends Component {

  state = {
    isFormValid: false,
    isCardFormDetailsWindowVisible: false,

    isInputFieldValid: {
      firstName: false,
      lastName: false,
      CVV: false,
      secretQuestion: false,
      secretAnswer: false
    }
  };

  handleCardFormInputChange = ( e ) => {
    const regex = new RegExp(validationRegEx[name]);

    this.setState(
      {
        [name]: value,
        isInputFieldValid: {
          ...this.state.isInputFieldValid,
          [name]: regex.test(value)
        }
      },
    );
  };

  handleSubmit = () => {
    const {firstName, lastName, cardNumber, cardType } = this.state;
    const validationObjectStatus = Object.values(this.state.isInputFieldValid).every(
      value => value === true
    );

    this.setState({
      isSubmiting: true,
      isFormValid: validationObjectStatus
    }, () => {
      this.props.onFormDataSubmit(firstName, lastName, cardNumber, validationObjectStatus, cardType)
    });

  };

  handleCardTypeChange = (cardType) => {
    this.setState({
      cardType
    }, () => {
      this.props.onCardTypeChange(cardType);
    })
  };

  render() {
    const { isFormValid, isSubmiting, cardNumber } = this.state;

    return (
      <SafeAreaView className="Container">
        <View className="CardForm" onSubmit={e => e.preventDefault()}>
          <TextInput
            type="text"
            mask="9999 9999 9999 9999"
            placeholder="Credit card number"
            className={'cardNumber'}
            name="cardNumber"
            onChange={this.handleCardFormInputChange}

          />
          <View className="CardForm__flex-wrapper">
            <TextInput
              type="text"
              mask="99/99"
              name="ExpirationDate"
              className={'ExpirationDate'}
              onChangeText={this.handleCardFormInputChange}
              placeholder="Expiration Date"
            />
            <TextInput
              type="text"
              name="CVV"
              placeholder="CVV"
              className={'CVV'}
              onChangeText={this.handleCardFormInputChange}
            />
          </View>
          <View className="CardForm__flex-wrapper">
            <TextInput
              type="text"
              name="firstName"
              placeholder="First Name"
              className={'firstName'}
              onChangeText={this.handleCardFormInputChange}
            />
            <TextInput
              type="text"
              name="lastName"
              placeholder="Last Name"
              className={'lastName'}
              onChangeText={this.handleCardFormInputChange}
            />
          </View>
          <TextInput
            type="text"
            name="secretQuestion"
            placeholder="Secret Question"
            className={'secretQuestion'}
            onChangeText={this.handleCardFormInputChange}
          />
          <TextInput
            type="text"
            name="secretAnswer"
            placeholder="Secret Answer"
            className={'secretAnswer'}
            onChangeText={this.handleCardFormInputChange}
          />
          <Button type="submit" title="Submit" className="CardForm__button" onPress={this.handleSubmit}>
            Submit
          </Button>
        </View>
        {isFormValid && isSubmiting  && <CardFormDetails onCardTypeChange = { this.handleCardTypeChange } cardNumber={ cardNumber }/> }
      </SafeAreaView>
    );
  }
}

CardForm.defaultProps = {
  isCardFormInfoViewVisible: false,
  isSubmiting: false
};

CardForm.propTypes = {
  isCardFormInfoViewVisible: PropTypes.bool,
  isSubmiting: PropTypes.bool,
  onDataChange: PropTypes.func,
  onCardTypeChange: PropTypes.func,
  onFormDataSubmit: PropTypes.func
};

export default CardForm;
