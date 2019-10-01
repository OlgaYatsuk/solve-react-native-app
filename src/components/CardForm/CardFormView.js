import React from 'react';
import {Text, StyleSheet, Platform, View, SafeAreaView, TextInput, Button} from 'react-native'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Hide from "react-native-hide-with-keyboard";
import KeyboardSpacer from "react-native-keyboard-spacer";
import {Colors} from "react-native/Libraries/NewAppScreen";
// import PropTypes from 'prop-types';


//rules for validation
const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First Name is required'),
  lastName: Yup.string()
    .required('Last Name is required'),
  expirationDate: Yup.string()
    .required('You should fill in all the fields'),
  cardNumber: Yup.string()
    .min(16, 'Password must be at least 6 characters')
    .required('Card number is required'),
  cvv: Yup.string()
    .min(3, 'Must contain 3 or 4 digits')
    .required('Cvv is required'),
});

const validationRegEx = {
  cvv: '^[0-9]{3,4}$',
  firstName: "[a-zA-Z]",
  lastName: "[a-zA-Z]",
  cardNumber: "[a-zA-Z]",
  expirationDate: "[a-z]"
};

class CardFormView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormValid: false,
      isInputFieldValid: {
        firstName: false,
        lastName: false,
        cvv: false,
        expirationDate: false,
      }
    }
  }

  fieldValidation = (e) => {
    console.log(e)
    // const regex = new RegExp(validationRegEx[name]);
    //
    // this.setState({
        // [name]: value,
        // isInputFieldValid: {
        //   ...this.state.isInputFieldValid,
        //   [name]: regex.test(value)
        // },
      // })
      // () => {
      //   const validationObjectStatus = Object.values(this.state.isInputFieldValid).every(value => value === true);
      //   this.props.getFormData([name], value, validationObjectStatus);
      // });
  };

  getInputClassName = name => {
    return classNames('CardForm__input', {
      'is-invalid': this.props.isSubmiting && !this.state.isInputFieldValid[name],
      null: this.props.isSubmiting && this.state.isInputFieldValid[name]
    });
  };


  render() {
    return (
      <Formik
        initialValues={{
          cvv: '',
          firstName: '',
          lastName: '',
          cardNumber: '',
          expirationDate: ''
        }}

        validationSchema={validationSchema}

        // onSubmit={this.setState({isSubmiting: true})}

      >
        {(props) => (
          <SafeAreaView keyboardShouldPersistTaps="handled" style={styles.FormView}>
            <TextInput
              style={styles.TextInput}
              onChangeText={props.handleChange('cvv')}
              onBlur={props.handleBlur('cvv')}
              value={props.values.cvv}
              placeholder={'cvv'}
            />
            {props.errors.cvv  ? (
              <Text style={styles.Error}>{props.errors.cvv}</Text>
            ) : null}
            <TextInput
              style={styles.TextInput}
              onChangeText={props.handleChange('firstName')}
              onBlur={props.handleBlur('firstName')}
              value={props.values.firstName}
              placeholder={'firstName'}
            />
            {props.errors.firstName  ? (
              <Text style={styles.Error}>{props.errors.firstName}</Text>
            ) : null}
            <TextInput
              style={styles.TextInput}
              onChangeText={props.handleChange('lastName')}
              onBlur={props.handleBlur('lastName')}
              value={props.values.lastName}
              placeholder={'lastName'}
            />
            {props.errors.lastName  ? (
              <Text style={styles.Error}>{props.errors.lastName}</Text>
            ) : null}
            <TextInput
              style={styles.TextInput}
              onChangeText={props.handleChange('cardNumber')}
              onBlur={props.handleBlur('cardNumber')}
              value={props.values.cardNumber}
              placeholder={'cardNumber'}
              max={16}
            />
            {props.errors.cardNumber  ? (
              <Text style={styles.Error}>{props.errors.cardNumber}</Text>
            ) : null}
            <TextInput
              style={styles.TextInput}
              onChangeText={props.handleChange('expirationDate')}
              onBlur={props.handleBlur('expirationDate')}
              value={props.values.expirationDate}
              placeholder={'expirationData'}
            />
            {props.errors.expirationDate ? (
              <Text style={styles.Error}>{props.errors.expirationDate}</Text>
            ) : null}
            <Button onPress={props.handleSubmit} title="Submit" />
            {Platform.OS === "ios" && <KeyboardSpacer />}
          </SafeAreaView>
        )}
      </Formik>

    )
  }
}

const styles = StyleSheet.create({
  FormView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingRight: 20,
    paddingLeft: 20
  },

  Error: {
    color: 'red',
    marginTop: 5
  },

  TextInput: {
    height: 40,
    width: '80%',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#989fb9'
  }
});


export default CardFormView;

