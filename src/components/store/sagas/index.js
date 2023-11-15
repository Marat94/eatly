import { all, fork } from 'redux-saga/effects';
import category from './category';

export default function* root() {
  const sagas = [
    category
  ];
  yield all(sagas.map(fork));
}