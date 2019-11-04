import React from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  SafeAreaView,
  TextInput,
  Picker,
  StyleSheet,
  Button,
} from 'react-native';

const UserInfoCard = ({
  name,
  title,
  isSizePickerVisible,
  onSizeSelect,
  onSizeValueChange,
  size,
  weight,
  country,
  eventType,
  isEditable,
  onButtonClick,
}) => {
  return (
    <SafeAreaView style={styles.BlueView}>
      <Text>{title}</Text>
      <TextInput
        placeholder="Enter your name"
        value={name}
        isEditable={isEditable}
        style={styles.Input}
      />
      <TouchableHighlight style={{padding: 20}} onPress={onSizeSelect}>
        <TextInput
          placeholder="Select size"
          value={size}
          style={styles.Input}
        />
      </TouchableHighlight>
      <Picker
        style={isSizePickerVisible ? styles.picker : styles.hiddenPicker}
        selectedValue={size}
        onValueChange={onSizeValueChange}>
        <Picker.Item label="XS" value="xs" />
        <Picker.Item label="S" value="s" />
        <Picker.Item label="M" value="m" />
        <Picker.Item label="L" value="l" />
      </Picker>
      <TextInput
        placeholder="Select weight"
        value={weight}
        isEditable={isEditable}
        style={styles.Input}
      />
      <TextInput
        placeholder="Select country"
        value={country}
        style={styles.Input}
      />
      <Button onPress={onButtonClick} title={eventType} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  BlueView: {
    backgroundColor: '#dde6f6',
    flex: 1,
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

  picker: {
    width: 100,
  },

  hiddenPicker: {
    display: 'none',
  },
});

export default UserInfoCard;
