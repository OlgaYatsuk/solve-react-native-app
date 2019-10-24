import React, {Component} from 'react';
import CardForm from "./CardForm";
import {View, StyleSheet} from 'react-native'
import {connect} from 'react-redux';
import {updateCardData} from '../../../actions/updateCardData';
import {validateCardData} from '../../../actions/validateCardData';
import {ValidationStatus} from "../../../utils/validationStatus";

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
  onSubmit: (v1?: string, v2?: string, v3?:string, v4?: string, v5?: string) => void,
};

type State = {
  creditCardNumber: string,
  cvv: string,
  expirationDate: string,
  firstName: string,
  lastName: string,
  secretQuestion: string,
  secretAnswer: string,
};

class CardFormContainer extends Component<Props, State> {
  state = {
    isSubmiting: false,
    firstName: undefined,
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
    }
  };

  handleCardFormInputChange = (name: string) => (event: ChangeEvent) => {
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

  handleSubmit = () => {
    const {firstName, lastName, creditCardNumber, expirationDate, secretAnswer, secretQuestion, cvv} = this.state;
    this.setState({
      isSubmiting: true,
    });

    this.props.validateCardData(creditCardNumber, expirationDate, cvv, firstName, lastName)

    this.props.updateCardData(
      creditCardNumber,
      expirationDate,
      cvv,
      firstName,
      lastName,
      secretAnswer,
      secretQuestion,
    );
  };

  render() {
    return (
      <View>
        <CardForm
          isSubmiting={this.state.isSubmiting}
          isInputFieldValid={this.state.isInputFieldValid}
          onSubmit={this.handleSubmit}
          onCardFormInputChange={this.handleCardFormInputChange}
          isFormShown={this.props.isFormShown}
          isError={this.props.isError}
          isLoading={this.props.isLoading}
        />
      </View>
    );
  }
}

const mapDispatchToProps = {
  updateCardData,
  validateCardData
};

const mapStateToProps = state => {
  return {
    isFormShown: state.cardDataReducer.isFormShown,
    isError: state.validationStatusReducer.validationStatus === ValidationStatus.Failure,
    isLoading: state.validationStatusReducer.validationStatus === ValidationStatus.Request,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardFormContainer);

