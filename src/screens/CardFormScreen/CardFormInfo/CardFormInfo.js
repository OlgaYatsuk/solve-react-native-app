// @flow

import React from 'react';
import {Text, View, ActivityIndicator, StyleSheet} from 'react-native';

type Props = {
  cardType?: string, firstName?: string, lastName?: string, creditCardNumber?: string, isError?: boolean, isLoading?: boolean
};

const CardFormInfo = ({cardType, firstName, lastName, creditCardNumber, isError, isLoading} : Props) => {
  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large"/>
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

  if (!!creditCardNumber && !!firstName && !isError) {
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
  return <View/>;
};


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

export default CardFormInfo;
