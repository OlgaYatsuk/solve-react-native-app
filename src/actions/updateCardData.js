//@flow
/*eslint-disable*/

export const updateCardData = (
  creditCardNumber: string,
  expirationDate: string,
  cvv: string,
  firstName: string,
  lastName: string,
  secretAnswer: string,
  secretQuestion: string,
) => {
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
