import React from 'react';
import {StyleSheet, Button, TouchableHighlight, Text, View} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
const SwipeToolbarContainer = ({ passedCandidatesCounter, likedCandidatesCounter }, props)=>  {
  return (
      <View>
        <View style={styles.statusStyle}>
          <Text style={{color: 'red'}}>Passed: {passedCandidatesCounter}</Text>
          <Text style={{color: 'blue'}}>Liked: {likedCandidatesCounter}</Text>
        </View>
        <Button title="review" onPress={props.onReviewWindowToggle}/>
      </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  statusStyle: {
    padding: 15,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around'
  },
});

export default SwipeToolbarContainer;
