// @flow

import React from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

const FlatListTestHeader = ({
  onItemAdd,
  onRemoveItem,
  isAddItemButtonDisabled,
  isRemoveButtonDisabled,
  onInputChange,
  inputValue,
}: {
  onInputChange: (value: string) => string,
  inputValue?: string,
  onRemoveItem: () => void,
  onItemAdd: () => void,
  isAddItemButtonDisabled: boolean,
  isRemoveButtonDisabled: boolean,
}) => {
  return (
    <View style={styles.FlatListHeader}>
      <Text style={styles.Title}>How do you like this?</Text>
      <TextInput
        onChangeText={onInputChange}
        value={inputValue}
        style={styles.Input}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Button
          onPress={onItemAdd}
          disabled={isAddItemButtonDisabled}
          title={'Add item'}
        />
        <Button
          onPress={onRemoveItem}
          disabled={isRemoveButtonDisabled}
          title={'Remove item'}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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
  },
});

export default FlatListTestHeader;
