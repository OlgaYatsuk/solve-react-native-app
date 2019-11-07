import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

const UserInfoUpdateResponse = ({navigate}) => {
  return (
    <View style={styles.ResponseView}>
      <Text>Your data was updated.</Text>
      <Text>Thank you for using our app</Text>
      <Button
        title={'Explore new jobs'}
        onPress={() => navigate('SwipeScreen')}
      />
    </View>
  );
};

const styles = {
  ResponseView: {
    alignItems: 'center',
    marginTop: 20,
  },
};

export default UserInfoUpdateResponse;
