export const passCandidate = candidate => {
  return {
    type: 'PASS_CANDIDATE',
    payload: {
      ...candidate,
    },
  };
};
