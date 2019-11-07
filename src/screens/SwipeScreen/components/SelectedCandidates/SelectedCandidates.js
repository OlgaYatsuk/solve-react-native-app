import React, {Component} from 'react';
import {StyleSheet, Image, View, ScrollView} from 'react-native';
import {Card} from 'react-native-elements';
import axios from 'axios/index';
import {connect} from 'react-redux';

type State = {
  // likedJobs: number,
  // passedJobs: number
};

class SelectedCandidates extends Component<State> {
  render() {
    return (
      <ScrollView
        style={styles.selectedCandidates}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {this.props.likedCandidates.map(candidate => (
          <View key={candidate.email} style={{marginRight: 5, width: 60}}>
            <Image
              source={{uri: candidate.picture.large}}
              style={styles.photo}
            />
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
    padding: 20,
  },
});

export default SelectedCandidates;
