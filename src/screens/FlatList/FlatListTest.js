// @flow

import React from 'react';
import {
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import useUsers from './useUsers';
import {connect} from 'react-redux';
import {likeCandidate} from '../../actions/likeCandidate';
import {deleteCandidate} from '../../actions/deleteCandidate';
import {selectCandidate} from '../../actions/selectCandidate';

const FlatListTest = ({
  selectedCandidates,
  deleteCandidate,
  selectCandidate,
}) => {
  const {
    candidates,
    handleItemSelect,
    handleRemoveItem,
    handleItemAdd,
    value,
    handleInputChange,
    isRemoveButtonDisabled,
    isAddButtonDisabled,
  } = useUsers(selectedCandidates, deleteCandidate, selectCandidate);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => handleItemSelect(item)}
        style={!item.isSelected ? styles.List : [styles.List, styles.selected]}>
        {/*<Text style={styles.LightText}>{item.title}</Text>*/}
        <Image style={styles.Image} source={{uri: item.picture.large}} />
        <View>
          <Text style={styles.UserName}>
            {item.name.first} {item.name.last}
          </Text>
          <Text style={styles.UserAge}>Email: {item.email}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.BlueView}>
      <View style={styles.FlatListHeader}>
        <Text style={styles.Title}>Time to review your candidates!</Text>
        <TextInput
          onChangeText={handleInputChange}
          value={value}
          style={styles.Input}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          {/*<Button*/}
          {/*onPress={handleItemAdd}*/}
          {/*value={value}*/}
          {/*disabled={isAddButtonDisabled}*/}
          {/*title={'Add item'}*/}
          {/*/>*/}
          <Button
            onPress={handleRemoveItem}
            disabled={isRemoveButtonDisabled}
            title={'Pass selected candidates'}
          />
        </View>
      </View>
      <FlatList
        data={candidates}
        renderItem={item => renderItem(item)}
        keyExtractor={item => item.email}
      />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    selectedCandidates: state.selectedCandidatesReducer.selectedCandidates,
  };
};

const mapDispatchToProps = {
  likeCandidate,
  selectCandidate,
  deleteCandidate,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FlatListTest);

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
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    padding: 15,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: -1,
  },
  Image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },

  selected: {
    backgroundColor: '#c1ceff',
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
    fontSize: 18,
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
  },
});
