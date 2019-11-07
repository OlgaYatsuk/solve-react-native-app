import {candidatesService} from '../services/CandidatesService';

export const fetchCandidates = () => (dispatch, getState) => {
  if (getState().candidates.isLoading) {
    return;
  }

  dispatch({type: 'FETCH_CANDIDATES_REQUEST'});

  candidatesService
    .fetchCandidates(5)
    .then(({data}) => {
      const results = data.results.map(item => {
        item.isSelected = false;

        return item;
      });
      dispatch({
        type: 'FETCH_CANDIDATES_SUCCESS',
        payload: results,
      });
    })
    .catch(err => {
      dispatch({
        type: 'FETCH_CANDIDATES_FAILURE',
        err,
      });
    });
};
