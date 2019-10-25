import React, {Component} from 'react';
import axios from 'axios';
import {SafeAreaView} from 'react-native';
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
    likedCandidatesCounter: 0,
    likedCandidates: [],
    passedCandidates: [],
    passedCandidatesCounter: 0,
  };

  componentDidMount() {
    this.getNewUsers();
  }

  getNewUsers = () => {
    axios
      .get(
        'https://randomuser.me/api/?results=5&inc=name,picture,nat=us,dk,fr,gb',
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
      likedCandidates: this.state.likedCandidates.concat(user),
    }));
  };

  handleSwipeLeft = user => {
    this.setState(({passedCandidatesCounter}) => ({
      passedCandidatesCounter: passedCandidatesCounter + 1,
      passedCandidates: this.state.passedCandidates.concat(user),
    }));
  };

  resetSearch = () => {
    this.setState(
      {
        likedCandidatesCounter: 0,
        passedCandidatesCounter: 0,
      },
      () => {
        this.getNewUsers();
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
      passedCandidates,
    } = this.state;

    return (
      <SafeAreaView>
        <SwipeToolbarContainer
          passedCandidatesCounter={passedCandidatesCounter}
          likedCandidatesCounter={likedCandidatesCounter}
          onReviewWindowToggle={this.onReviewWindowToggle}
        />
        <SelectedCandidatesContainer likedCandidates={likedCandidates} />
        <SwipeCardContainer
          users={users}
          onSwipeRight={this.handleSwipeRight}
          resetSearch={this.resetSearch}
          onSwipeLeft={this.handleSwipeLeft}
        />
      </SafeAreaView>
    );
  }
}

export default SwipeScreen;
