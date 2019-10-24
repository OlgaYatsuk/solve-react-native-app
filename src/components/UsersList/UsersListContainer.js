// @flow

import React, {Component} from 'react';

import UsersList from './UsersList';

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

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=100&inc=name,picture,dob')
      .then(res => res.json())
      .then(res => {
        this.setState({
          users: res.results,
        });
      });
  }

  render() {
    const {users} = this.state;

    return <UsersList users={users} />;
  }
}

export default UsersListContainer;
