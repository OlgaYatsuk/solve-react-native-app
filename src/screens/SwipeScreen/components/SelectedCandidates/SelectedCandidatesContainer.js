import React, {Component} from 'react';
import axios from 'axios';
import {Text, View, Button} from 'react-native';
import SelectedCandidates from './SelectedCandidates';

type Props = NavigationScreenProps & {
  navigation: Object,
};

class SelectedCandidatesContainer extends Component<Props> {
  // getUserCard = (usersArray) => {
  //   usersArray.map((user) => (
  //     <View>
  //       <Text>{user.name.first}</Text>
  //       <Text>{user.name.last}</Text>
  //       <Text>{user.name.last}</Text>
  //     </View>
  //   ))
  // };
  //
  render() {
    return <SelectedCandidates likedCandidates={this.props.likedCandidates} />;
  }
}

export default SelectedCandidatesContainer;
