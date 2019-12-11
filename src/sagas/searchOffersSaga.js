import { call, put, takeLatest } from 'redux-saga/effects';
import { searchOffers } from '../api/searchOffers';
import {
  SEARCH_OFFERS_REQUEST,
  searchOffersFailure,
  searchOffersRequest,
  searchOffersSuccess
} from '../actions/searchOffers';

function* searchOffersWorker(action) {
  try {
    const offers = yield call(searchOffers, action.payload);
    yield put(searchOffersSuccess(offers));
  } catch (e) {
    yield put(searchOffersFailure(e.message));
  }
}

export default function* searchOffer() {
  console.log('got dispatched');
  yield takeLatest(SEARCH_OFFERS_REQUEST, searchOffersWorker);
}
