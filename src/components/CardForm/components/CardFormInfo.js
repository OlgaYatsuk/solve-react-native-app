import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

class CardFormInfo extends Component {
  state = {
    isComponentRendered: false
  };

  startTimer = () => {
    const timerId = setTimeout(() => {
      this.setState({
        isComponentRendered: false,
        timerId: false
      })
    }, 5000);

    this.setState({
      isComponentRendered: true,
      timerId
    })
  };

  componentDidUpdate(prevProps) {
    if ( prevProps !== this.props) {
      if (!this.state.isComponentRendered) {
        return this.startTimer()
      }
    }
  };

  render() {
    const {firstName, lastName, cardNumber, cardType, validationObjectStatus} = this.props;
    if (!this.state.isComponentRendered || (!firstName&& !lastName && !cardNumber && !cardType) || !validationObjectStatus ) return null;

    return (
      <View className="CardForm__info">
        <Text className="CardForm__subtitle">Voilà! Here is your information :</Text>
        <Text>
          <span>Name:</span>
          {firstName}
        </Text>
        <Text>
          <span>Last Name:</span>
          {lastName}
        </Text>
        <Text>
          <span>Card type:</span>
          {cardType}
        </Text>
        <Text>
          <span>Last 4 digits of your card: **** **** ****</span>
          {cardNumber.slice(15, 19)}
        </Text>
      </View>
    );
  }
}

CardFormInfo.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  cardNumber: PropTypes.string
};

export default  CardFormInfo;
