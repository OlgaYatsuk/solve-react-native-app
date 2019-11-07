// @flow

import React from 'react';
import {FlatList, View, Text, Image, StyleSheet} from 'react-native';

type User = {
  picture: {large: string},
  name: {first: string, last: string},
  email: 'string',
};

const UsersList = ({users}: {users: User[]}) => {
  const keyExtractor = (item: {}) => item.email;

  return (
    <View style={styles.BlueView}>
      <Text style={styles.Title}>
        You can trust us, cause every person from this list has given us a lot
        💰
      </Text>
      <FlatList
        style={styles.FlatList}
        windowSize={2}
        data={users}
        renderItem={({item}) => (
          <View style={styles.Card}>
            <Image style={styles.Image} source={{uri: item.picture.large}} />
            <View>
              <Text style={styles.UserName}>
                {item.name.first} {item.name.last}
              </Text>
              <Text style={styles.UserAge}>Email: {item.email}</Text>
            </View>
          </View>
        )}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  FlatList: {
    padding: 20,
  },

  Image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },

  BlueView: {
    backgroundColor: '#dde6f6',
    flex: 1,
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
