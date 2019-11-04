// @flow

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import UserInfoCard from './UserInfoCard';


class CreateUserInfoCard extends Component<Props> {
  state = {
    isEditable: true,
    isSizePickerVisible: false
  };

  handleButtonClick = () => {
    this.setState({
      isEditable: false
    })

    //Post new data...
  };

  handleSizeValueChange = (itemValue) => {
    this.setState({
      size: itemValue
    })
  };

  handleSizeSelect = () => {
    this.setState({
      isSizePickerVisible: !this.state.isSizePickerVisible
    })
  };

  render() {
    const {isEditable, isSizePickerVisible, size} = this.state;
    return (
      <UserInfoCard title={'Create new card'}
                    size={size}
                    isEditable={isEditable}
                    isSizePickerVisible={isSizePickerVisible}
                    onSizeSelect={this.handleSizeSelect}
                    eventType={'create'}
                    onSizeValueChange={this.handleSizeValueChange}
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

export default CreateUserInfoCard;
