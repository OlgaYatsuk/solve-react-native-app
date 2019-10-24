// @flow

import React, {Component} from 'react';
import {FlatList, View, Text, Image, StyleSheet} from 'react-native';

type Props = {
  users: User[],
};

type User = {
  picture: {large: string},
  name: {first: string, last: string},
  dob: {age: string, date: string},
};

class UsersList extends Component<Props> {
  render() {
    const {users} = this.props;
    return (
      <View>
        <Text style={styles.Title}>
          You can trust us, cause every person from this list has given us a lot
          💰
        </Text>
        <FlatList
          style={styles.FlatList}
          windowSize={15}
          data={users}
          renderItem={({item}) => (
            <View style={styles.Card}>
              <Image style={styles.Image} source={{uri: item.picture.large}} />
              <View>
                <Text style={styles.UserName}>
                  {item.name.first} {item.name.last}
                </Text>
                <Text style={styles.UserAge}>Age: {item.dob.age}</Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.dob.date}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  FlatList: {
    padding: 20,
  },

  Image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },

  Card: {
    marginBottom: 20,
  },

  Title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 20,
  },

  UserAge: {
    textAlign: 'center',
    fontSize: 18,
  },

  UserName: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default UsersList;
