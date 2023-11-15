import { CATEGORY_REQUEST, CATEGORY_SUCCESS, CATEGORY_FAILURE } from "../actions/category";

const initialState = {
  categoryData: [],
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_REQUEST:
      return {
        ...state,
        loading: true
      };

    case CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categoryData: action.payload
      };

    case CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}