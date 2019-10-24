//@flow
/*eslint-disable*/
const initialValue = {
  creditCardNumber: '',
  date: '',
  cvv: '',
  expirationDate: '',
  firstName: '',
  lastName: '',
  cardType: ''
};

export const cardDataReducer = (
  state: {
    creditCardNumber: string,
    date: string,
    cvv: string,
    firstName: string,
    lastName: string,
    cardType: string,
  } = initialValue,
  action: {
    type: string,
    payload: {
      creditCardNumber: string,
      date: string,
      cvv: string,
      firstName: string,
      lastName: string,
    },
  },
) => {
  switch (action.type) {
    case 'UPDATE_CARD_DATA':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
