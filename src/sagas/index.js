import { fork } from 'redux-saga/effects';
import { default as searchOfferSaga } from './searchOffersSaga';

export default function* rootSaga() {
  yield fork(searchOfferSaga);
}
