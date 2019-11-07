// @flow

import React, {Component} from 'react';

import UsersList from './UsersList';
import {connect} from 'react-redux';
import {likeCandidate} from '../../actions/likeCandidate';

type Props = {};

type User = {
  picture: {large: string},
  name: {first: string, last: string},
  dob: {age: string, date: string},
};

type State = {
  users: User[],
};

class UsersListContainer extends Component<Props, State> {
  state = {
    users: [],
  };

  componentDidMount() {}

  render() {
    const {selectedCandidates} = this.props;

    return <UsersList users={selectedCandidates} />;
  }
}

const mapStateToProps = state => {
  return {
    selectedCandidates: state.selectedCandidatesReducer.selectedCandidates,
  };
};

const mapDispatchToProps = {
  likeCandidate,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersListContainer);
