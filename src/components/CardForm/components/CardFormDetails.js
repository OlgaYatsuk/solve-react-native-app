import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

class CardFormDetails extends PureComponent {
  state = {
    cardType: undefined
  };
  componentDidMount () {
    this.setState ({
      cardType: this.props.cardNumber.slice(15, 19) > 2000 ? "Master Card" : "Visa"
    })
  }

  componentDidUpdate (prevProps) {
    const { cardNumber, onCardTypeChange } = this.props;

    if (prevProps !== this.props) {
      const lastFourDigits = cardNumber.slice(15, 19);

      this.setState ({
        cardType: lastFourDigits > 2000 ? "Master Card" : "Visa"
      }, ()=> {
        onCardTypeChange(this.state.cardType);
      })
    }
  }

  render() {
    if (!this.state.cardType) return null;

    return (
      <View className={ 'CardForm__card-type' }>
        { this.state.cardType }
      </View>
    );
  }
}

CardFormDetails.defaultPops = {
  cardNumber: '1111 1111 1111 1111',
};

CardFormDetails.propTypes = {
  cardNumber: PropTypes.string,
  onCardTypeChange: PropTypes.func
};

export default CardFormDetails;
