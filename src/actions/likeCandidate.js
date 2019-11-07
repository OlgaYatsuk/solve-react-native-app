export const likeCandidate = candidate => {
  return {
    type: 'LIKE_CANDIDATE',
    payload: {
      ...candidate,
    },
  };
};
