const initialValues = {
  likedCandidates: [],
  selectedCandidates: [],
};

export const selectedCandidatesReducer = (
  state: {} = initialValues,
  action,
) => {
  switch (action.type) {
    case 'LIKE_CANDIDATE':
      return {
        ...state,
        selectedCandidates: [...state.selectedCandidates, action.payload],
      };

    case 'SELECT_NEW_CANDIDATE':
      const usersWithSelectedItems = state.selectedCandidates.map(candidate => {
        return candidate.email === action.payload.candidate.email
          ? {...candidate, isSelected: true}
          : candidate;
      });

      console.log('state.selectedCandidates', usersWithSelectedItems);

      return {
        ...state,
        selectedCandidates: usersWithSelectedItems,
      };

    case 'DELETE_CANDIDATE':
      const filteredCandidates = state.selectedCandidates.filter(
        (item: User) => {
          return !item.isSelected;
        },
      );

      // console.log('state.selectedCandidates', state.selectedCandidates)

      return {
        ...state,
        selectedCandidates: filteredCandidates,
      };

    default:
      return state;
  }
};
