import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import CardForm from '../CardFormScreen/CardForm/CardForm';

import {updateCardData} from '../../actions/updateCardData';
import {validateCardData} from '../../actions/validateCardData';
import {ValidationStatus} from '../../utils/validationStatus';

//rules for validation
const validationRegEx = {
  creditCardNumber: '\\b\\d{4}(| |-)\\d{4}\\1\\d{4}\\1\\d{4}\\b',
  CVV: '^[0-9]{3,4}$',
  expirationDate: '^\\d{2}\\/\\d{2}$',
  firstName: '[a-zA-Z]',
  lastName: '[a-zA-Z]',
  secretQuestion: '[a-zA-Z]',
  secretAnswer: '[a-zA-Z]',
};

type Props = {
  isError: boolean,
  isLoading: boolean,
  navigate: (v1: string) => void,
  updateCardData: (
    creditCardNumber?: string,
    expirationDate?: string,
    cvv?: string,
    firstName?: string,
    lastName?: string,
    secretAnswer?: string,
    secretQuestion?: string,
  ) => void,
  validateCardData: (
    creditCardNumber?: string,
    expirationDate?: string,
    cvv?: string,
    firstName?: string,
    lastName?: string,
  ) => any,
  onSubmit: () => void,
};

type State = {
  creditCardNumber?: string,
  cvv?: string,
  isSubmiting?: boolean,
  expirationDate?: string,
  firstName?: string,
  isSubmiting: boolean,
  lastName?: string,
  secretQuestion?: string,
  isInputFieldValid: IsInputFieldValid,
  secretAnswer?: string,
};

type IsInputFieldValid = {
  [key: string]: boolean,
};

class CardFormContainer extends Component<Props, State> {
  state = {
    isSubmiting: false,
    firstName: undefined,
    cvv: undefined,
    lastName: undefined,
    creditCardNumber: undefined,
    expirationDate: undefined,
    secretQuestion: undefined,
    secretAnswer: undefined,
    isInputFieldValid: {
      creditCardNumber: false,
      cvv: false,
      expirationDate: false,
      firstName: false,
      lastName: false,
      secretQuestion: false,
      secretAnswer: false,
    },
  };

  handleCardFormInputChange = (name: string) => (
    event: SyntheticEvent<HTMLInputElement>,
  ): void => {
    const value = event.nativeEvent.text;
    const regex = new RegExp(validationRegEx[name]);

    this.setState({
      [name]: value,
      isSubmiting: false,
      isInputFieldValid: {
        ...this.state.isInputFieldValid,
        [name]: regex.test(value),
      },
    });
  };

  render() {
    const {isSubmiting, isInputFieldValid} = this.state;
    const {isError, isLoading, navigate} = this.props;

    return (
      <View>
        <CardForm
          isSubmiting={isSubmiting}
          isInputFieldValid={isInputFieldValid}
          onSubmit={this.handleSubmit}
          onCardFormInputChange={this.handleCardFormInputChange}
          isError={isError}
          navigate={navigate}
          isLoading={isLoading}
        />
      </View>
    );
  }
}

const mapDispatchToProps = {
  updateCardData,
  validateCardData,
};

const mapStateToProps = state => {
  return {
    isFormShown: state.cardDataReducer.isFormShown,
    isError:
      state.validationStatusReducer.validationStatus ===
      ValidationStatus.Failure,
    isLoading:
      state.validationStatusReducer.validationStatus ===
      ValidationStatus.Request,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardFormInfo);
