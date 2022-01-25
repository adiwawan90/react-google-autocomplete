import {
  SET_ADDRESS,
  SET_FULL_ADDRESS,
  SET_COORDINATE,
  SET_TOGGLE_OPEN,
  SET_TOGGLE_CLOSE
} from './types';

const initialState = {
  isOpen: false,
  coords: { lat: 40.756795, lng: -73.954298 },
  address: '',
  fullAddress: {},
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload
      };
    case SET_FULL_ADDRESS:
      return {
        ...state,
        fullAddress: action.payload
      };
    case SET_COORDINATE:
      return {
        ...state,
        coords: action.payload,
      };
    case SET_TOGGLE_OPEN:
      return {
        ...state,
        isOpen: true,
      };
    case SET_TOGGLE_CLOSE:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
}