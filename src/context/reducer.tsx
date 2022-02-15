import {ADD_FAVORITE, REMOVE_FAVORITE} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      //Login pendiente
      return {
        ...state,
      };

    case REMOVE_FAVORITE:
      //Login pendiente
      return {...state};

    default:
      return state;
  }
};
