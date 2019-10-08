// @flow

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, Button} from 'react-native';

type Props = {
  navigation: Object,
};

class WelcomeScreen extends Component<Props> {
  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            textAlign: 'center',
            padding: 20,
          }}>
          Hello! We would like to offer you a perfect deal: you give us money,
          and we give you nothing. Click if you can't wait for it:
        </Text>
        <Button
          title="Go to Purchasing"
          onPress={() => navigate('CardFormContainer')}
        />
      </View>
    );
  }
}

export default WelcomeScreen;
