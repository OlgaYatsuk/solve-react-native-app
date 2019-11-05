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
import useCard from './useCardForm';
import {updateCardData} from '../../../actions/updateCardData';
import {validateCardData} from '../../../actions/validateCardData';
import {connect} from 'react-redux';
import {ValidationStatus} from '../../../utils/validationStatus';

const CardForm = ({isLoading, navigate, updateCardData, validateCardData}) => {
  const {
    handleSubmit,
    isInputFieldValid,
    handleCardFormInputChange,
    isSubmiting,
  } = useCard(updateCardData, validateCardData);
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
        onChange={handleCardFormInputChange('creditCardNumber')}
      />
      <View>
        <TextInput
          editable={!isLoading}
          style={getInputClassName('expirationDate')}
          onChange={handleCardFormInputChange('expirationDate')}
          placeholder="Expiration Date"
        />
        <TextInput
          editable={!isLoading}
          placeholder="CVV"
          style={getInputClassName('cvv')}
          onChange={handleCardFormInputChange('cvv')}
        />
      </View>
      <TextInput
        editable={!isLoading}
        placeholder="First Name"
        style={getInputClassName('firstName')}
        onChange={handleCardFormInputChange('firstName')}
      />
      <TextInput
        editable={!isLoading}
        placeholder="Last Name"
        style={getInputClassName('lastName')}
        onChange={handleCardFormInputChange('lastName')}
      />
      <TextInput
        editable={!isLoading}
        placeholder="Secret question"
        style={getInputClassName('secretQuestion')}
        onChange={handleCardFormInputChange('secretQuestion')}
      />
      <TextInput
        editable={!isLoading}
        placeholder="Secret answer"
        style={getInputClassName('secretAnswer')}
        onChange={handleCardFormInputChange('secretAnswer')}
      />
      <TouchableHighlight style={styles.Button} onPress={handleSubmit}>
        <Text style={styles.ButtonText}>Submit</Text>
      </TouchableHighlight>
      <Button onPress={() => {navigate('SwipeScreen')}}
              title={'Try'}
      />
    </View>
  );
};

const mapDispatchToProps = {
  updateCardData,
  validateCardData,
};

const mapStateToProps = state => {
  return {
    isLoading:
      state.validationStatusReducer.validationStatus ===
      ValidationStatus.Request,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardForm);

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
