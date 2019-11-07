const initialValues = {
  passedCandidates: [],
};

export const passedCandidatesReducer = (state: {} = initialValues, action) => {
  switch (action.type) {
    case 'PASS_CANDIDATE':
      return {
        ...state,
        passedCandidates: [...state.passedCandidates, action.payload],
      };

    default:
      return state;
  }
};
