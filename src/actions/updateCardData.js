//@flow
/*eslint-disable*/

export const updateCardData = (     creditCardNumber,
                                    expirationDate,
                                    cvv,
                                    firstName,
                                    lastName,
                                    secretAnswer,
                                    secretQuestion) => {

  return {
    type: 'UPDATE_CARD_DATA',
    payload: {
      creditCardNumber,
      expirationDate,
      cvv,
      firstName,
      lastName,
      secretAnswer,
      secretQuestion,
    },
  };
};
