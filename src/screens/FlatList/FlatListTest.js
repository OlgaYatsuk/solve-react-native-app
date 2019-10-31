// @flow

import React from 'react';
import {FlatList, TextInput, Button, TouchableOpacity, View, Text, StyleSheet} from 'react-native';

import useUsers from './useUsers';

export const FlatListTest = () => {
  const {users, handleItemSelect, handleRemoveItem, handleItemAdd, value, handleInputChange, isRemoveButtonDisabled, isAddButtonDisabled} = useUsers();

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => handleItemSelect(item)}
        style={!item.isSelected ? styles.List : [styles.List, styles.selected]}>
        <Text style={styles.LightText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.BlueView}>
      <View style={styles.FlatListHeader}>
        <Text style={styles.Title}>How do you like this?</Text>
        <TextInput
          onChangeText={handleInputChange}
          value={value}
          style={styles.Input}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Button
            onPress={handleItemAdd}
            value={value}
            disabled={isAddButtonDisabled}
            title={'Add item'}
          />
          <Button
            onPress={handleRemoveItem}
            disabled={isRemoveButtonDisabled}
            title={'Remove item'}
          />
        </View>
      </View>
      <FlatList
        data={users}
        renderItem={user => renderItem(user)}
        keyExtractor={item => item.id.toString()}

      />
    </View>
  );
};

const styles = StyleSheet.create({
  BlueView: {
    backgroundColor: '#dde6f6',
    flex: 1,
  },
  List: {
    paddingVertical: 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#668aff',
    height: 50,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: -1,
  },
  selected: {
    backgroundColor: '#c1ceff'
  },
  LightText: {
    color: '#000',
    width: 200,
    paddingLeft: 15,
    fontSize: 12,
  },
  ErrorStyle: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18
  },
  FlatListHeader: {
    margin: 20,
  },
  Title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 15,
  },
  Input: {
    fontSize: 16,
    padding: 12,
    borderRadius: 8,
    borderColor: '#fff',
    width: 300,
    alignSelf: 'center',
    borderWidth: 1,
    margin: 8,
    backgroundColor: '#fff',
  }
});

