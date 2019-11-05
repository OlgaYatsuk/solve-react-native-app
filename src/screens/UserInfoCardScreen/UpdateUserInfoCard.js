// @flow

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import UserInfoCard from './UserInfoCard';

type Props = {}

type State = {
  isEditable: boolean,
  isLoading: boolean,
  isResponseReady: boolean,
  isSearchStatusPickerVisible: boolean,
  searchStatus: string,
  name: string,
  country: string,
  age: string
}

class UpdateUserInfoCard extends Component<Props, State> {
  state = {
    isEditable: true,
    isSearchStatusPickerVisible: false,
    searchStatus: 'Yes, send me jobs',
    name: 'Olga',
    country: 'UA',
    age: '23',
    isLoading: false,
    isResponseReady: false
  };

  handleButtonClick = () => {
    this.setState({
      isLoading: true
    });

    setTimeout(() => {
      this.setState({
        isLoading: false,
        isResponseReady: true
      })
    }, 2000)
  };

  handleInputValueChange = (name:string) => (event: SyntheticEvent<HTMLInputElement>) => {
    const value = event.nativeEvent.text;

    this.setState({
      [name]: value
    })
  };

  handleStatusValueChange = (itemValue: string) => {
    this.setState({
      searchStatus: itemValue,
    });
  };

  handleStatusSelect = () => {
    this.setState({
      isSearchStatusPickerVisible: !this.state.isSearchStatusPickerVisible,
    });
  };

  render() {
    const {
      isSearchStatusPickerVisible,
      searchStatus,
      age,
      name,
      isResponseReady,
      isLoading,
      country
    } = this.state;
    const {navigate} = this.props.navigation;
    return (
      <UserInfoCard
        navigate={navigate}
        title={'Update existing information'}
        name={name}
        country={country}
        isLoading={isLoading}
        onInputValueChange={this.handleInputValueChange}
        searchStatus={searchStatus}
        age={age}
        isResponseReady={isResponseReady}
        isSearchStatusPickerVisible={isSearchStatusPickerVisible}
        onStatusSelect={this.handleStatusSelect}
        eventType={'Update'}
        onStatusValueChange={this.handleStatusValueChange}
        onButtonClick={this.handleButtonClick}
      />
    );
  }
}

const styles = StyleSheet.create({
  BlueView: {
    backgroundColor: '#dde6f6',
    flex: 1,
  },
});

export default UpdateUserInfoCard;
