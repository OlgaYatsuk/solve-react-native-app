import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  View,
  ScrollView,
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
      <ScrollView style={styles.selectedCandidates} horizontal={true} showsHorizontalScrollIndicator={false}>
        {this.props.users.map(user => (
          <View key={user.email} style={{marginRight: 5, width: 60}}>
            <Image source={{uri: user.picture.large}} style={styles.photo} />
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  photo: {
    height: 48,
    width: 48,
    borderRadius: 50,
  },

  selectedCandidates: {
    padding: 20
  }
});

export default SelectedCandidates;
