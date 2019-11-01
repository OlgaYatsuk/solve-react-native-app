import React, {useState, useCallback} from 'react';

const useCard = (updateCard, validateCard) => {
  const [inputValues, setValues] = useState('');
  const [isSubmiting, setSubmitingStatus] = useState(false);
  const [isInputFieldValid, setInputFieldValid] = useState({});

  const handleCardFormInputChange = (name: string) => (
    event: SyntheticEvent<HTMLInputElement>,
  ): void => {
    const value = event.nativeEvent.text;
    const regex = new RegExp(validationRegEx[name]);

    const changedInputValues = {...inputValues, [name]: value};

    const inputFieldValidationStatus = {
      ...isInputFieldValid,
      [name]: regex.test(value),
    };

    setValues(changedInputValues);
    setInputFieldValid(inputFieldValidationStatus);
  };

  const handleSubmit = useCallback(() => {
    const {
      firstName,
      lastName,
      creditCardNumber,
      expirationDate,
      cvv,
      secretAnswer,
      secretQuestion,
    } = inputValues;

    updateCard(
      creditCardNumber,
      expirationDate,
      cvv,
      firstName,
      lastName,
      secretAnswer,
      secretQuestion,
    );

    validateCard(creditCardNumber, expirationDate, cvv, firstName, lastName);

    setSubmitingStatus(true);
  }, [inputValues, isSubmiting]);

  return {
    isInputFieldValid,
    handleSubmit,
    handleCardFormInputChange,
    isSubmiting,
    inputValues,
  };
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
