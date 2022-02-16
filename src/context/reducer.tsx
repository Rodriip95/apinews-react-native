import {initialState} from '.';
import {ADD_FAVORITE, APPLY_FILTERS, REMOVE_FAVORITE} from './actions';

export const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_FAVORITE:
      //Login pendiente
      return {
        ...state,
      };

    case REMOVE_FAVORITE:
      //Login pendiente
      return {...state};

    case APPLY_FILTERS:
      return {...state, filters: payload};

    default:
      return state;
  }
};
