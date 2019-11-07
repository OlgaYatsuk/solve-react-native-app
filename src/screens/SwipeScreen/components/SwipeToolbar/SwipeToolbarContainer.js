import React from 'react';
import {StyleSheet, Button, TouchableHighlight, Text, View} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';

const SwipeToolbarContainer = (
  {passedCandidatesCounter, likedCandidatesCounter, navigate},
  props,
) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 30,
          paddingBottom: 0,
        }}>
        <Button title="Review" onPress={() => navigate('FlatListTest')} />
        <Button
          title="Profile"
          onPress={() => navigate('UserInfoCardScreen')}
        />
      </View>
      <View style={styles.statusStyle}>
        <Text style={{color: 'red'}}>Passed: {passedCandidatesCounter}</Text>
        <Text style={{color: 'blue'}}>Liked: {likedCandidatesCounter}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c1ceff',
  },
  statusStyle: {
    padding: 15,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
});

export default SwipeToolbarContainer;
