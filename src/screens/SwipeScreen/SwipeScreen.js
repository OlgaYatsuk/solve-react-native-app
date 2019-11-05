import React, {Component} from 'react';
import axios from 'axios';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import SwipeCardContainer from './components/SwipeCard/SwipeCardContainer';
import SwipeToolbarContainer from './components/SwipeToolbar/SwipeToolbarContainer';
import SelectedCandidatesContainer from './components/SelectedCandidates/SelectedCandidatesContainer';

type State = {
  likedCandidatesCounter: number,
  passedCandidatesCounter: number,
};

class SwipeScreen extends Component<State> {
  state = {
    users: '',
    isReseting: false,
    likedCandidatesCounter: 0,
    likedCandidates: [],
    passedCandidates: [],
    passedCandidatesCounter: 0,
  };

  componentDidMount() {
    this.getNewUsers();
  }

  getNewUsers = () => {
      axios.get(
        'https://randomuser.me/api/?results=2&inc=name,email,picture,nat=us,dk,fr,gb',
      )
      .then(this.handleUsersDataRequest)
      .catch(e => {
        this.setState({
          error: 'Sorry, something went wrong',
        });
      });
  };

  handleSwipeRight = user => {
    this.setState(({likedCandidatesCounter}) => ({
      likedCandidatesCounter: likedCandidatesCounter + 1,
      likedCandidates: [user, ...this.state.likedCandidates],
    }));
  };

  handleSwipeLeft = user => {
    this.setState(({passedCandidatesCounter}) => ({
      passedCandidatesCounter: passedCandidatesCounter + 1,
      passedCandidates: [user, ...this.state.passedCandidates],
    }));
  };

  resetSearch = () => {
    this.setState(
      {
        likedCandidatesCounter: 0,
        passedCandidatesCounter: 0,
        isReseting: true
      }, () => {
        this.getNewUsers();
        this.setState({
          isReseting: false
        })
      },
    );

  };

  handleUsersDataRequest = ({data}) => {
    const {results} = data;
    this.setState({users: results});
  };

  onReviewWindowToggle = () => {
    this.setState(state => {
      return {
        isReviewWindowVisible: !state.isReviewWindowVisible,
      };
    });
  };

  render() {
    const {
      users,
      passedCandidatesCounter,
      likedCandidatesCounter,
      likedCandidates,
      isReseting,
      passedCandidates,
    } = this.state;

    const {navigate} = this.props.navigation;

    return (
      <SafeAreaView style={styles.BlueView}>
        <SwipeToolbarContainer
          navigate={navigate}
          passedCandidatesCounter={passedCandidatesCounter}
          likedCandidatesCounter={likedCandidatesCounter}
          onReviewWindowToggle={this.onReviewWindowToggle}
        />
        <SelectedCandidatesContainer likedCandidates={likedCandidates} />
        <SwipeCardContainer
          users={users}
          isReseting={isReseting}
          onSwipeRight={this.handleSwipeRight}
          resetSearch={this.resetSearch}
          onSwipeLeft={this.handleSwipeLeft}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  BlueView: {
    backgroundColor: '#dde6f6',
    // flex: 1
  },
});

export default SwipeScreen;
