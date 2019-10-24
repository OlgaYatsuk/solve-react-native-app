// // @flow
import {serverValidation} from '../services/serverValidation';
import {
  VALIDATION_STATUS_REQUEST,
  VALIDATION_STATUS_FAILURE,
  VALIDATION_STATUS_SUCCESS,
} from '../types/actionTypes';

export const validateCardData = (
  val2: string,
  val3: string,
  val4: string,
  val5: string,
  val6: string
) => (dispatch: ({type: string}) => void) => {
  dispatch({type: VALIDATION_STATUS_REQUEST});
  return serverValidation(val2, val3, val4, val5, val6)
    .then(() => {
      dispatch({type: VALIDATION_STATUS_SUCCESS});
    })
    .catch(err => {
      dispatch({type: VALIDATION_STATUS_FAILURE, err});
    });
};
