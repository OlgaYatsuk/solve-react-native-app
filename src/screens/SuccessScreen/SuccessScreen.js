// @flow

import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationState, NavigationScreenProp} from 'react-navigation';

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
};

class SuccessScreen extends Component<Props> {
  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 24,
            textAlign: 'center',
            padding: 20,
          }}>
          Thank You! You are such a nice guy!
        </Text>
        <Button
          title="One more time"
          onPress={() => navigate('WelcomeScreen')}
        />
      </View>
    );
  }
}

export default SuccessScreen;
