// @flow
import React from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';

import cn from 'react-native-classnames';
import {NavigationState, NavigationScreenProp} from 'react-navigation';

type IsInputFieldValid = {
  [key: string]: boolean,
};

type Props = {
  isSubmiting: boolean,
  isLoading: boolean,
  navigate: (v1: string) => void,
  isInputFieldValid: IsInputFieldValid,
  onSubmit?: () => void,
  onCardFormInputChange: (v1: string) => void,
};

const CardForm = ({
  isLoading,
  isSubmiting,
  onCardFormInputChange,
  navigate,
  isInputFieldValid,
  onSubmit,
}: Props) => {
  const getInputClassName = (name: string) => {
    return cn(styles, 'Input', {
      InputError: isSubmiting && !isInputFieldValid[name],
      InputDisabled: isSubmiting && isLoading,
      null: isSubmiting && isInputFieldValid[name],
    });
  };

  return (
    <View style={styles.Form}>
      <Text style={styles.Title}>We are waiting for your data 😍</Text>
      <TextInput
        editable={!isLoading}
        placeholder="Credit card number"
        style={getInputClassName('creditCardNumber')}
        onChange={onCardFormInputChange('creditCardNumber')}
      />
      <View>
        <TextInput
          editable={!isLoading}
          style={getInputClassName('expirationDate')}
          onChange={onCardFormInputChange('expirationDate')}
          placeholder="Expiration Date"
        />
        <TextInput
          editable={!isLoading}
          placeholder="CVV"
          style={getInputClassName('cvv')}
          onChange={onCardFormInputChange('cvv')}
        />
      </View>
      <TextInput
        editable={!isLoading}
        placeholder="First Name"
        style={getInputClassName('firstName')}
        onChange={onCardFormInputChange('firstName')}
      />
      <TextInput
        editable={!isLoading}
        placeholder="Last Name"
        style={getInputClassName('lastName')}
        onChange={onCardFormInputChange('lastName')}
      />
      <TextInput
        editable={!isLoading}
        placeholder="Secret question"
        style={getInputClassName('secretQuestion')}
        onChange={onCardFormInputChange('secretQuestion')}
      />
      <TextInput
        editable={!isLoading}
        placeholder="Secret answer"
        style={getInputClassName('secretAnswer')}
        onChange={onCardFormInputChange('secretAnswer')}
      />
      <TouchableHighlight style={styles.Button} onPress={onSubmit}>
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
};

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
    borderColor: '#fff',
    borderWidth: 1,
    margin: 8,
    backgroundColor: '#fff',
  },

  InputError: {
    borderColor: 'red',
    borderWidth: 1,
  },

  InputDisabled: {
    backgroundColor: '#eeeeee',
    borderColor: '#eeeeee',
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
