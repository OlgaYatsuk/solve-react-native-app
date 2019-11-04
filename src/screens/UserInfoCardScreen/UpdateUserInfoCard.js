// @flow

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import UserInfoCard from './UserInfoCard';
import UserInfoUpdateResponse from './UserInfoResponses/UserInfoUpdateResponse';

class UpdateUserInfoCard extends Component<Props> {
  state = {
    isEditable: true,
    size: '',
  };

  handleButtonClick = () => {
    //Put new data...
  };

  handleSizeValueChange = itemValue => {
    this.setState({
      size: itemValue,
    });
  };

  handleSizeSelect = () => {
    this.setState({
      isSizePickerVisible: !this.state.isSizePickerVisible,
    });
  };

  render() {
    return (
      <UserInfoCard
        title={'Update existing information'}
        name={'Jumpsuit'}
        size={this.state.size}
        weight={'0.8'}
        onSizeSelect={this.handleSizeSelect}
        eventType={'Update'}
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

export default UpdateUserInfoCard;
