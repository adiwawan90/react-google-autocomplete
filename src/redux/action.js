import {
  SET_ADDRESS,
  SET_COORDINATE,
  SET_TOGGLE_OPEN,
  SET_TOGGLE_CLOSE,
  SET_FULL_ADDRESS
} from './types';

export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address,
});

export const setFullAddress = (address) => ({
  type: SET_FULL_ADDRESS,
  payload: address,
});

export const setCoordinate = (coor) => ({
  type: SET_COORDINATE,
  payload: coor,
});

export const setOpen = () => ({
  type: SET_TOGGLE_OPEN,
});

export const setClose = () => ({
  type: SET_TOGGLE_CLOSE,
});