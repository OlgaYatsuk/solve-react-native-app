import React, {Component} from 'react';
import axios from 'axios';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';

import {likeCandidate} from '../../actions/likeCandidate';
import SwipeCardContainer from './components/SwipeCard/SwipeCardContainer';
import SwipeToolbarContainer from './components/SwipeToolbar/SwipeToolbarContainer';
import SelectedCandidatesContainer from './components/SelectedCandidates/SelectedCandidatesContainer';
import {connect} from 'react-redux';
import {passCandidate} from '../../actions/passCandidate';
import {fetchCandidates} from '../../actions/fetchCandidates';

type State = {
  likedCandidatesCounter: number,
  passedCandidatesCounter: number,
};

class SwipeScreen extends Component<State> {
  state = {
    candidates: '',
    likedCandidatesCounter: 0,
    likedCandidates: [],
    passedCandidates: [],
    passedCandidatesCounter: 0,
  };

  componentDidMount() {
    this.props.fetchCandidates();
  }

  handleSwipeRight = candidate => {
    this.setState(({likedCandidatesCounter}) => ({
      likedCandidatesCounter: likedCandidatesCounter + 1,
    }));

    this.props.likeCandidate(candidate);
  };

  handleSwipeLeft = candidate => {
    this.props.passCandidate(candidate);
  };

  onReviewWindowToggle = () => {
    this.setState(state => {
      return {
        isReviewWindowVisible: !state.isReviewWindowVisible,
      };
    });
  };

  render() {
    const {passedCandidatesCounter} = this.state;

    const {navigate} = this.props.navigation;

    return (
      <SafeAreaView style={styles.BlueView}>
        <SwipeToolbarContainer
          navigate={navigate}
          passedCandidatesCounter={this.props.passedCandidatesAmount}
          likedCandidatesCounter={this.props.selectedCandidatesAmount}
          onReviewWindowToggle={this.onReviewWindowToggle}
        />
        <SelectedCandidatesContainer
          likedCandidates={this.props.selectedCandidates}
        />
        <SwipeCardContainer
          users={this.props.candidates}
          onCandidatesUpdate={this.props.fetchCandidates}
          onSwipeRight={this.handleSwipeRight}
          onSwipeLeft={this.handleSwipeLeft}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    candidates: state.candidates.values,
    selectedCandidatesAmount:
      state.selectedCandidatesReducer.selectedCandidates.length,
    passedCandidatesAmount:
      state.passedCandidatesReducer.passedCandidates.length,
    selectedCandidates: state.selectedCandidatesReducer.selectedCandidates,
  };
};

const mapDispatchToProps = {
  likeCandidate,
  passCandidate,
  fetchCandidates,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SwipeScreen);

const styles = StyleSheet.create({
  BlueView: {
    backgroundColor: '#dde6f6',
  },
});
