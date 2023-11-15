import {DATA_LIST} from "../actions/dish";

const initialState = {
  dish: []
}

export default function reducer(state = initialState, action) {
  if(action.type === DATA_LIST) {
    return {
      ...state,
      dish: ['SweDish', 'Steak']
    }
  } else {
    return {...state}
  }
}