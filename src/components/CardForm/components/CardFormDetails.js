// @flow

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

type Props = {
  onCardTypeChange: (v1?: string) => void,
  cardNumber?: string,
};

type State = {
  cardType?: string,
};

class CardFormDetails extends PureComponent<Props, State> {
  state = {
    cardType: '',
  };

  componentDidMount() {
    const {cardNumber} = this.props;

    this.setState({
      cardType:
        cardNumber && +cardNumber.slice(15, 19) > 2000 ? 'Master Card' : 'Visa',
    });
  }

  componentDidUpdate(prevProps: Props) {
    const {cardNumber, onCardTypeChange} = this.props;
    if (prevProps === this.props && !cardNumber) {
      return;
    }

    const cardType: string =
      cardNumber && +cardNumber.slice(15, 19) > 2000 ? 'Master Card' : 'Visa';

    this.setState({cardType});

    onCardTypeChange(this.state.cardType);
  }

  render() {
    if (!this.state.cardType) return null;

    return (
      <View className={'CardForm__card-type'}>
        <Text>{this.state.cardType}</Text>
      </View>
    );
  }
}

export default CardFormDetails;
