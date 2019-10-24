// @flow
import React, {Component} from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';

import cn from 'react-native-classnames';

type IsInputFieldValid = {
  [key: string]: boolean,
};

type Props = {
  isSubmiting: boolean,
  isLoading: boolean,
  navigate: (v1: string) => void,
  isInputFieldValid: IsInputFieldValid,
  onSubmit?: () => void,
  onCardFormInputChange: (v1?: string) => void,
};

type State = {
  isSubmiting: boolean,
  isCardFormDetailsWindowVisible: boolean,
  firstName?: string,
  lastName?: string,
  creditCardNumber?: string,
  cvv?: string,
  isSubmiting: boolean,
  cardType?: string,
  secretQuestion?: string,
  secretAnswer?: string,
};

class CardForm extends Component<Props, State> {
  getInputClassName = (name: string) => {
    const {isSubmiting, isInputFieldValid} = this.props;

    return cn(styles, 'Input', {
      InputError: isSubmiting && !isInputFieldValid[name],
      null: isSubmiting && isInputFieldValid[name],
    });
  };
  render() {
    const {isLoading, onCardFormInputChange, navigate} = this.props;

    return (
      <View style={styles.Form}>
        <Text style={styles.Title}>We are waiting for your data 😍</Text>
        <TextInput
          editable={!isLoading}
          placeholder="Credit card number"
          style={this.getInputClassName('creditCardNumber')}
          onChange={onCardFormInputChange('creditCardNumber')}
        />
        <View>
          <TextInput
            editable={!isLoading}
            style={this.getInputClassName('expirationDate')}
            onChange={onCardFormInputChange('expirationDate')}
            placeholder="Expiration Date"
          />
          <TextInput
            editable={!isLoading}
            placeholder="CVV"
            style={this.getInputClassName('cvv')}
            onChange={onCardFormInputChange('cvv')}
          />
        </View>
        <TextInput
          editable={!isLoading}
          placeholder="First Name"
          style={this.getInputClassName('firstName')}
          onChange={onCardFormInputChange('firstName')}
        />
        <TextInput
          editable={!isLoading}
          placeholder="Last Name"
          style={this.getInputClassName('lastName')}
          onChange={onCardFormInputChange('lastName')}
        />
        <TextInput
          editable={!isLoading}
          placeholder="Secret question"
          style={this.getInputClassName('secretQuestion')}
          onChange={onCardFormInputChange('secretQuestion')}
        />
        <TextInput
          editable={!isLoading}
          placeholder="Secret answer"
          style={this.getInputClassName('secretAnswer')}
          onChange={onCardFormInputChange('secretAnswer')}
        />
        <TouchableHighlight style={styles.Button} onPress={this.props.onSubmit}>
          <Text style={styles.ButtonText}>Submit</Text>
        </TouchableHighlight>
        <Button
          onPress={() => {
            navigate('UsersListContainer');
          }}
          title={'Show other people who have paid'}
        />
      </View>
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
    padding: 12,
    borderRadius: 8,
    margin: 8,
    backgroundColor: '#fff',
  },

  InputError: {
    borderColor: 'red',
    borderWidth: 1,
  },

  Title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
    marginBottom: 10,
  },

  Button: {
    backgroundColor: '#0000d0',
    borderRadius: 8,
    padding: 10,
    margin: 10,
  },

  ButtonText: {
    color: '#fff',
    padding: 5,
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
