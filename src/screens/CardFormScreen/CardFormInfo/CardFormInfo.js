// @flow

import React from 'react';
import {Text, View, ActivityIndicator, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {updateCardData} from '../../../actions/updateCardData';
import {validateCardData} from '../../../actions/validateCardData';
import {ValidationStatus} from '../../../utils/validationStatus';
import useCardInfo from './useCardFormInfo';

const CardFormInfo = ({
  isLoading,
  isFormShown,
  isError,
  firstName,
  lastName,
  creditCardNumber,
}) => {
  const {cardType} = useCardInfo(creditCardNumber);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Text style={styles.ErrorText}>
          Please, fill the form with valid data
        </Text>
      </View>
    );
  }

  if (!isError && isFormShown) {
    return (
      <View style={styles.InfoView}>
        <Text style={styles.Title}>Voilà! Here is your information 🍾</Text>
        <Text style={styles.Text}>
          <Text>Name: </Text>
          {firstName}
        </Text>
        <Text style={styles.Text}>
          <Text>Last Name: </Text>
          {lastName}
        </Text>
        <Text style={styles.Text}>
          <Text>Card type: </Text>
          {cardType}
        </Text>
        <Text style={styles.Text}>
          <Text>Last 4 digits of your card: **** **** ****</Text>
          {creditCardNumber.slice(12, 16)}
        </Text>
      </View>

    );
  }
  return <View />;
};

const mapDispatchToProps = {
  updateCardData,
  validateCardData,
};

const mapStateToProps = state => {
  return {
    isFormShown: state.validationStatusReducer.isFormShown,
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

const styles = StyleSheet.create({
  ErrorText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },

  InfoView: {
    marginLeft: 20,
    marginRight: 20,
  },

  Text: {
    marginTop: 5,
  },

  Title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
