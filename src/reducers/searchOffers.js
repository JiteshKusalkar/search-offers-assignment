import produce from 'immer';
import {
  SEARCH_OFFERS_FAILURE,
  SEARCH_OFFERS_REQUEST,
  SEARCH_OFFERS_SUCCESS
} from '../actions/searchOffers';
import { pluckAttrFromData } from '../utils/common';

const initialState = {
  isFetching: false,
  data: [],
  error: null
};

export const searchOffers = (state = initialState, action) =>
  produce(state, draftState => {
    switch (action.type) {
      case SEARCH_OFFERS_REQUEST:
        draftState.isFetching = true;
        return;

      case SEARCH_OFFERS_SUCCESS:
        draftState.isFetching = false;
        draftState.data = pluckAttrFromData(
          action.payload.offers,
          'id',
          'groupId',
          'internalLink',
          'details',
          'photos',
          'price',
          'provider',
          'location',
          'rating',
          'usps'
        );
        return;

      case SEARCH_OFFERS_FAILURE:
        draftState.error = action.error;
        return;

      default:
        return;
    }
  });
