import React, {useState, useEffect, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {validateCardData} from '../../actions/validateCardData';
import {updateCardData} from '../../actions/updateCardData';
import {ValidationStatus} from "../../utils/validationStatus";

const useCard = () => {
  const [inputValues, setValues] = useState('');
  const [isInputFieldValid, setInputFieldValid] = useState({});
  const [isSubmiting, setSubmitingState] = useState(false);
  const dispatch = useDispatch();
  const {
    firstName,
    lastName,
    creditCardNumber,
    expirationDate,
    cvv,
    secretAnswer,
    secretQuestion
  } = inputValues;
  const validateCard = ()=> {dispatch(validateCardData(
    creditCardNumber,
    expirationDate,
    cvv,
    firstName,
    lastName,
  ))};

  const updateCard = ()=> {dispatch(updateCardData(creditCardNumber,
    expirationDate,
    cvv,
    firstName,
    lastName,
    secretAnswer,
    secretQuestion))};

  const handleCardFormInputChange = (name: string) => (
    event: SyntheticEvent<HTMLInputElement>,
  ): void => {
    const value = event.nativeEvent.text;
    const regex = new RegExp(validationRegEx[name]);

    const changedInputValues = {...inputValues, [name]: value};

    const inputFieldValidationStatus = {
      ...isInputFieldValid,
      [name]: regex.test(value)
    };

    const stopSubmiting = false

    setSubmitingState(stopSubmiting);
    setValues(changedInputValues);
    setInputFieldValid(inputFieldValidationStatus);
  };

  const handleSubmit = useCallback(() => {
    const {
      firstName,
      lastName,
      creditCardNumber,
      expirationDate,
      secretAnswer,
      secretQuestion,
      cvv,
    } = inputValues;

    validateCard(
      creditCardNumber,
      expirationDate,
      cvv,
      firstName,
      lastName,
    );

    updateCard(
      creditCardNumber,
      expirationDate,
      cvv,
      firstName,
      lastName,
      secretAnswer,
      secretQuestion,
    );

    setSubmitingState(!isSubmiting)
  });

  const isLoading =  useSelector(state => state.validationStatusReducer.validationStatus ===
    ValidationStatus.Request);

  const isError= useSelector(state => {
    return state.validationStatusReducer.validationStatus === ValidationStatus.Failure
  });

  return {isLoading, isError, isInputFieldValid, handleSubmit, handleCardFormInputChange, firstName,
    lastName,
    creditCardNumber,
    expirationDate,  isSubmiting};
};

export default useCard;

const validationRegEx = {
  creditCardNumber: '\\b\\d{4}(| |-)\\d{4}\\1\\d{4}\\1\\d{4}\\b',
  CVV: '^[0-9]{3,4}$',
  expirationDate: '^\\d{2}\\/\\d{2}$',
  firstName: '[a-zA-Z]',
  lastName: '[a-zA-Z]',
  secretQuestion: '[a-zA-Z]',
  secretAnswer: '[a-zA-Z]',
};
