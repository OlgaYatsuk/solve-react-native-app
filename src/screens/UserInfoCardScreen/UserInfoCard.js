import React from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  SafeAreaView,
  TextInput,
  Picker,
  StyleSheet,
  ActivityIndicator,
  Button,
} from 'react-native';

import UserInfoUpdateResponse from './UserInfoResponses/UserInfoUpdateResponse';

const UserInfoCard = ({
                        name,
                        title,
                        isSearchStatusPickerVisible,
                        onStatusSelect,
                        onStatusValueChange,
                        searchStatus,
                        navigate,
                        age,
                        country,
                        eventType,
                        isEditable,
                        isLoading,
                        isResponseReady,
                        onButtonClick,
                        onInputValueChange
                      }: {
  isEditable: boolean,
  isSearchStatusPickerVisible: boolean,
  isResponseReady: boolean,
  isLoading: boolean,
  searchStatus: string,
  name: string,
  country: string,
  age: string,
  title: string,
  eventType: string,
  onButtonClick: () => void,
  onInputValueChange: (name:string) => (event: SyntheticEvent<HTMLInputElement>) => {[name]: string},
}) => {
  return (
    <SafeAreaView style={styles.BlueView}>
      <View style={styles.Form}>
        <Text style={styles.Title}>{title}</Text>
        <TextInput
          placeholder="Enter your name"
          value={name}
          isEditable={isEditable}
          style={styles.Input}
          onChange={onInputValueChange('name')}
        />
        <TouchableHighlight style={styles.TouchableInput} onPress={onStatusSelect}>
          <Text
            style={styles.textValue}
          >{searchStatus}</Text>
        </TouchableHighlight>
        <Picker
          style={isSearchStatusPickerVisible ? styles.picker : styles.hiddenPicker}
          selectedValue={searchStatus}
          // onValueChange={onStatusValueChange}>
          placeHolder={'Are you opened for opportunities?'}>
          <Picker.Item label="Yes, send me jobs" value="Yes, send me jobs"/>
          <Picker.Item label="No, I want to explore market" value="No, I'm exploring the market "/>
        </Picker>
        <TextInput
          placeholder="How old are you?"
          value={age}
          isEditable={isEditable}
          style={styles.Input}
          onChange={onInputValueChange('age')}
        />
        <TextInput
          placeholder="Select country"
          value={country}
          style={styles.Input}
          onChange={onInputValueChange('country')}
        />
        <Button onPress={onButtonClick} title={eventType}/>
      </View>
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      {isResponseReady && <UserInfoUpdateResponse navigate={navigate}/>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  BlueView: {
    backgroundColor: '#dde6f6',
    flex: 1,
  },

  Form: {
    alignItems: 'stretch',
    padding: 30,
    width: '100%',
  },

  Input: {
    fontSize: 16,
    padding: 12,
    borderRadius: 8,
    borderColor: '#fff',
    borderWidth: 1,
    margin: 8,
    backgroundColor: '#fff',
  },

  TouchableInput: {
    padding: 12,
    borderRadius: 8,
    borderColor: '#fff',
    borderWidth: 1,
    margin: 8,
    backgroundColor: '#fff',
  },

  InputError: {
    borderColor: 'red',
    borderWidth: 1,
  },

  InputDisabled: {
    backgroundColor: '#eeeeee',
    borderColor: '#eeeeee',
    borderWidth: 1,
  },

  Title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
    marginBottom: 10,
  },

  textValue: {
    color: '#000'
  },

  picker: {
    borderRadius: 8,
    padding: 0,
    margin: 8,
    backgroundColor: '#fff'
  },

  hiddenPicker: {
    display: 'none',
  },
});

export default UserInfoCard;
