// @flow

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

type State = {
  isComponentRendered: boolean,
  timerId?: *,
};

type Props = NavigationScreenProps & {
  firstName?: string,
  lastName?: string,
  cardNumber?: string,
  cardType?: string,
  validationObjectStatus?: boolean
};

class CardFormInfo extends Component<Props, State> {
  state = {
    isComponentRendered: false,
  };

  startTimer = () => {
    const timerId = setTimeout(() => {
      this.setState({
        isComponentRendered: false,
        timerId: false,
      });
    }, 5000);

    this.setState({
      isComponentRendered: true,
      timerId,
    });
  };

  componentDidUpdate(prevProps: Props) {
    if (prevProps !== this.props && !this.state.isComponentRendered) {
        return this.startTimer();
    }
  }

  render() {
    const {
      firstName,
      lastName,
      cardNumber,
      cardType,
      validationObjectStatus,
    } = this.props;

    const { isComponentRendered } = this.state;

    if (
      !isComponentRendered &&
      (!firstName && !lastName && !cardNumber && !cardType) ||
      !validationObjectStatus
    ) return null;

    return (
      <View>
        <Text>
          Voilà! Here is your information :
        </Text>
        <Text>
          <Text>Name:</Text>
          {firstName}
        </Text>
        <Text>
          <Text>Last Name:</Text>
          {lastName}
        </Text>
        <Text>
          <Text>Card type:</Text>
          {cardType}
        </Text>
        <Text>
          <Text>Last 4 digits of your card: **** **** ****</Text>
          {cardNumber && cardNumber.slice(15, 19)}
        </Text>
      </View>
    );
  }
}

export default CardFormInfo;
