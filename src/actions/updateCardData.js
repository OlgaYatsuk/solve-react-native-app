//@flow
/*eslint-disable*/

export const updateCardData = (
  creditCardNumber: string,
  date: string,
  cvv: string,
  firstName: string,
  expirationDate: string,
  lastName: string,
  cardType: string,
) => {
  return {
    type: 'UPDATE_CARD_DATA',
    payload: {
      creditCardNumber,
      date,
      cvv,
      expirationDate,
      firstName,
      lastName,
      cardType,
    },
  };
};
