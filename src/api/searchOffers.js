import { instance as api } from './instance';

const baseURL = 'search/offers';

export const searchOffers = params =>
  api.get(baseURL, { params }).then(response => response.data);
