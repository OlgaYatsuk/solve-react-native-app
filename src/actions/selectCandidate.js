export const selectCandidate = candidate => {
  return {
    type: 'SELECT_NEW_CANDIDATE',
    payload: {
      candidate,
    },
  };
};
