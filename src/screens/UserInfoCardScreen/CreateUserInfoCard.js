// @flow

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import UserInfoCard from './UserInfoCard';

type Props = {}

type State = {
  isEditable: boolean,
  isSearchStatusPickerVisible: boolean,
  searchStatus: string,
  name: string,
  country: string,
  age: string
}

class CreateUserInfoCard extends Component<Props, State> {
  state = {
    isEditable: true,
    isSearchStatusPickerVisible: false,
    searchStatus: '',
    country: '',
    age: '',
    name: ''
  };

  handleButtonClick = () => {
    this.setState({
      isEditable: false,
    });

    //Post new data...
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

  handleInputValueChange = (name:string) => (event: SyntheticEvent<HTMLInputElement>) => {
    const value = event.nativeEvent.text;

    this.setState({
      [name]: value
    })
  };

  render() {
    const {
      isEditable,
      isSearchStatusPickerVisible,
      searchStatus,
      age,
      name,
      country
    } = this.state;

    return (
      <UserInfoCard
        title={'Create new card'}
        searchStatus={searchStatus}
        isEditable={isEditable}
        age={age}
        name={name}
        country={country}
        onInputValueChange={this.handleInputValueChange}
        isSearchStatusPickerVisible={isSearchStatusPickerVisible}
        onStatusSelect={this.handleStatusSelect}
        eventType={'create'}
        onStatusValueChange={this.handleStatusValueChange}
        onButtonClick={this.handleButtonClick}
      />
    );
  }
}

export default CreateUserInfoCard;
