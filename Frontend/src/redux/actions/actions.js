import * as types from './actionTypes';

export const incrementPlaceholder = value => ({
  type: types.INCREMENT_PLACEHOLDER,
  payload: value
});

export const selectNav = option => ({
  type: types.SELECT_NAV,
  payload: option
});

export const selectOption = option => ({
  type: types.SELECT_OPTION,
  payload: option
});
