import * as types from './actionTypes';

export const selectNav = option => ({
  type: types.SELECT_NAV,
  payload: option
});

export const selectOption = option => ({
  type: types.SELECT_OPTION,
  payload: option
});
