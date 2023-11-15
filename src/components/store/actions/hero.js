import {getHeroApi} from "../../../api";

export const HERO_REQUEST = 'HERO_REQUEST';
export const HERO_SUCCESS = 'HERO_SUCCESS';
export const HERO_ERROR = 'HERO_ERROR'

export  function requestHero() {
  return {
    type: HERO_REQUEST
  }
}

export function receiveHero(data) {
  return {
    type: HERO_SUCCESS,
    payload: data
  }
}

export function receiveHeroError(error) {
  return {
    type: HERO_ERROR,
    payload: error
  }
}

export const fetchHero = () => {
  return (dispatch) => {
    dispatch(requestHero())
    getHeroApi()
      .then((res) => {
        dispatch(receiveHero(res.data))
      })
      .catch((err) => {
        dispatch(receiveHeroError(err))
      })
  }
}