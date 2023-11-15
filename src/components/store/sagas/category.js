import { takeLatest, call, put } from 'redux-saga/effects';
import {CATEGORY_REQUEST, CATEGORY_SUCCESS, CATEGORY_FAIL} from '../actions/category';
import {getCategoryApi} from "../../../api";

function* requestCategory() {
  try {
    const { data } = yield call(getCategoryApi);
    yield put({
      type: CATEGORY_SUCCESS,
      payload: { category: data },
    });
  } catch (e) {
    yield put({
      type: CATEGORY_FAIL,
      message: e.response.data.message || e.message,
    });
  }
}
export default function* watchers() {
  yield takeLatest(CATEGORY_REQUEST, requestCategory);
}