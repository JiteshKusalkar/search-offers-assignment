export const SEARCH_OFFERS_REQUEST = 'SEARCH_OFFERS_REQUEST';
export const SEARCH_OFFERS_SUCCESS = 'SEARCH_OFFERS_SUCCESS';
export const SEARCH_OFFERS_FAILURE = 'SEARCH_OFFERS_FAILURE';

export const searchOffersRequest = query => ({
  type: SEARCH_OFFERS_REQUEST,
  payload: query
});

export const searchOffersSuccess = offers => ({
  type: SEARCH_OFFERS_SUCCESS,
  payload: offers
});

export const searchOffersFailure = error => ({
  type: SEARCH_OFFERS_FAILURE,
  error
});
