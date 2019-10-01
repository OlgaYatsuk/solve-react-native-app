import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {Text, View, SafeAreaView, TextInput, Button} from 'react-native'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CardFormView from "./components/CardForm/CardFormView";

class CardFormPageContainer extends Component {
  render() {
    return (
      <CardFormView />
    );
  }
}

// CardFormPageContainer.propTypes = {};

export default CardFormPageContainer;
