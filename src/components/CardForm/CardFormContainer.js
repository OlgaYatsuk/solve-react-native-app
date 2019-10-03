import React, { Component } from 'react';
import PropTypes from "prop-types";

import CardFormInfo from './components/CardFormInfo';
import CardForm from './CardForm';

class CardFormContainer extends Component {
  state = {
    isCardFormInfoVisible: false,
  };

  handleFormDataSubmit = (firstName, lastName, cardNumber, validationObjectStatus, cardType) => {
    this.setState({
      firstName,
      lastName,
      cardNumber,
      validationObjectStatus,
      cardType
    });
  };

  handleCardTypeChange = (cardType) => {
    this.setState({
      cardType
    })
  };

  render() {
    const {firstName, lastName, cardType, cardNumber, validationObjectStatus} = this.state;

    return (
      <React.Fragment>
        <CardForm
          {...this.state}
          onDataChange={this.onDataChange}
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
      </React.Fragment>
    );
  }
}

CardFormContainer.defaultProps = {
  validationObjectStatus: false,
  firstName: "User",
  lastName: "User",
  cardType: "Visa",
  cardNumber: "1111 1111 1111 1111"
};

CardFormContainer.propTypes = {
  validationObjectStatus: PropTypes.bool,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  cardType: PropTypes.string,
  cardNumber: PropTypes.string
};

export default CardFormContainer;
