/* eslint-disable no-alert */
// @flow
const callAPI = <T>(data: T): Promise<T> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(data), 2000);
  });
};

const validation = (
  val1: string,
  val2: string,
  val3: string,
  val4: string,
  val5: string,
) => {
  return callAPI().then(() => {
    if (
      val1.length === 16 &&
      val2 !== undefined &&
      val3 !== undefined &&
      val4 !== undefined &&
      val5 !== undefined
    ) {
      alert('Validation success!');
    } else {
      alert('Validation error!');
    }
  });
};

export const ValidationService = (
  val1: string,
  val2: string,
  val3: string,
  val4: string,
  val5: string,
) => {
  return validation(val1, val2, val3, val4, val5);
};
