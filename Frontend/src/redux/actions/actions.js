import * as types from './actionTypes';

export const incrementPlaceholder = value => ({
  type: types.INCREMENT_PLACEHOLDER,
  payload: value
});

export const selectOption = option => ({
  type: types.SELECT_OPTION,
  payload: option
});
