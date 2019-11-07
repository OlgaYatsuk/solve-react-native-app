const initialValue = {
  isLoading: false,
  values: [],
};

export const candidates = (state = initialValue, action) => {
  switch (action.type) {
    case 'FETCH_CANDIDATES_REQUEST':
      return {
        ...state,
        isLoading: true,
      };

    case 'FETCH_CANDIDATES_FAILURE':
      return {
        ...state,
        isLoading: false,
        err: action.err,
      };

    case 'FETCH_CANDIDATES_SUCCESS':
      return {
        ...state,
        isLoading: false,
        values: action.payload,
      };

    default:
      return state;
  }
};
