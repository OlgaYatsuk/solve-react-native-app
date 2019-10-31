import React from 'react';
import {FlatList, TouchableOpacity, View, Text, StyleSheet} from 'react-native';

import FlatListTestHeader from '../FlatList/components/FlatListTestHeader';

type User = {
  title: string,
  userId: number,
  id: number,
  title: string,
  body: string,
  isSelected: boolean,
  selectedClass: Object,
};

const FlatListTest = ({
  users,
  onItemAdd,
  onRemoveItem,
  isAddItemButtonDisabled,
  isRemoveButtonDisabled,
  onInputChange,
  onItemSelect,
  inputValue,
  isError
}: {
  users: User[],
  inputValue?: string,
  isError: boolean,
  onItemSelect: (item: {
    item: {
      body: string,
      id: number,
      isSelected: boolean,
      selectedClass: Object,
      title: string,
      userId: number,
    },
  }) => void,
  onRemoveItem: () => void,
  onItemAdd: () => void,
  onInputChange: (value?: string) => string,
  isRemoveButtonDisabled: boolean,
  isAddItemButtonDisabled: boolean,
}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={!item.isSelected ? styles.List : [styles.List, styles.selected]}
        onPress={() => onItemSelect(item)}>
        <Text style={styles.LightText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.BlueView}>
      {isError && <Text style={styles.ErrorStyle}>Something went wrong...</Text>}
      <FlatList
        data={users}
        renderItem={user => renderItem(user)}
        ListHeaderComponent={
          <FlatListTestHeader
            isAddItemButtonDisabled={isAddItemButtonDisabled}
            onInputChange={onInputChange}
            inputValue={inputValue}
            onItemAdd={onItemAdd}
            onRemoveItem={onRemoveItem}
            isRemoveButtonDisabled={isRemoveButtonDisabled}
          />
        }
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
  }
});

export default FlatListTest;
