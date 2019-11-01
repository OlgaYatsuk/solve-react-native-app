// @flow

import {ValidationStatus} from '../utils/validationStatus';
import {
  VALIDATION_STATUS_REQUEST,
  VALIDATION_STATUS_FAILURE,
  VALIDATION_STATUS_SUCCESS,
} from '../types/actionTypes';

const initialValue = {
  requestStatus: ValidationStatus.Default,
};

export const validationStatusReducer = (
  state: {} = initialValue,
  action: {type: string},
) => {
  switch (action.type) {
    case VALIDATION_STATUS_REQUEST:
      return {
        ...state,
        isFormShown: false,
        validationStatus: ValidationStatus.Request,
      };

    case VALIDATION_STATUS_FAILURE:
      return {
        ...state,
        isFormShown: false,
        validationStatus: ValidationStatus.Failure,
      };

    case VALIDATION_STATUS_SUCCESS:
      return {
        ...state,
        isFormShown: true,
        validationStatus: ValidationStatus.Success,
      };

    default:
      return state;
  }
};
