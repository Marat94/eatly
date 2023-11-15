import {HERO_ERROR, HERO_REQUEST, HERO_SUCCESS} from "../actions/hero";


const initialState = {
  heroData: [],
  loader: false,
  error: null
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case HERO_REQUEST:
      return {
        ...state,
        loader: true
      };

    case HERO_SUCCESS:
      return  {
        ...state,
        loader: false,
        heroData: action.payload
      }

    case HERO_ERROR:
      return {
        ...state,
        loader: false,
        error: action.payload
      }

    default:
      return state
  }
}