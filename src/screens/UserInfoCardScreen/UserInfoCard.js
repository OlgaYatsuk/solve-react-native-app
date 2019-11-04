import React from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  TextInput,
  Picker,
  StyleSheet,
  Button,
} from 'react-native';

const UserInfoCard = ({name, title, isSizePickerVisible, onSizeSelect, onSizeValueChange, size, weight, country, eventType, isEditable, onButtonClick}) => {
  return (
    <View>
      <Text>{title}</Text>
      <TextInput placeholder='Enter your name'
                 value={name}
                 isEditable={isEditable}
      />
      <TouchableHighlight style={{padding: 20}} onPress={onSizeSelect}>
        <TextInput placeholder='Select size'
                   value={size}
                   // style={{pointerEvents: 'none'}}
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
      <TextInput placeholder='Select weight'
                 value={weight}
                 isEditable={isEditable}
      />
      <TextInput placeholder='Select country' value={country}/>
      <Button onPress={onButtonClick} title={eventType}/>
    </View>
  )
};

const styles = StyleSheet.create({
  picker: {
    width: 100
  },

  hiddenPicker: {
    display: 'none'
  }
});

export default UserInfoCard;
