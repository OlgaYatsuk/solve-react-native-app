import React, {Component} from 'react';
import {
  StyleSheet,
  Button,
  Image,
  Text,
  View,
  Animated,
  Dimensions,
  PanResponder,
} from 'react-native';
import {Card} from 'react-native-elements';
import axios from 'axios/index';

type State = {
  // likedJobs: number,
  // passedJobs: number
};

class SelectedCandidates extends Component<State> {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        {this.props.users.map(user => (
          <View styles={{marginRight: 20, width: '25%', flexDirection: 'row'}}>
            <Image source={{uri: user.picture.large}} style={styles.photo} />
            <View>
              <Text>{user.name.first}</Text>
              <Text>{user.name.last}</Text>
            </View>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  photo: {
    height: 34,
    width: 34,
    borderRadius: 50,
  },
});

export default SelectedCandidates;
