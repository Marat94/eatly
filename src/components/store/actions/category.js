import {getCategoryApi} from "../../../api";
export const CATEGORY_REQUEST = 'CATEGORY_REQUEST';
export const CATEGORY_SUCCESS = 'CATEGORY_SUCCESS';
export const CATEGORY_FAILURE = 'CATEGORY_FAILURE';

// Actions
export const requestCategory = () => ({
  type: CATEGORY_REQUEST
});

export const receiveCategory = (data) => ({
  type: CATEGORY_SUCCESS,
  payload: data
});

export const receiveCategoryError = (error) => ({
  type: CATEGORY_FAILURE,
  payload: error
});




// Thunk action
export const fetchCategory = () =>  {
  return (dispatch) => {
    console.log(dispatch)
    dispatch(requestCategory());
    getCategoryApi()
      .then((res) => {
        dispatch(receiveCategory(res.data));
      })
      .catch((err) => {
        dispatch(receiveCategoryError(err));
      });
  };
}