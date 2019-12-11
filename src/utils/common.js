const pluckAttrFromObject = (obj, props) =>
  props.reduce((ac, cu) => ({ ...ac, [cu]: obj[cu] }), {});

const lookupUSPS = {
  USP_PEOPLE: 'pers.',
  USP_BED_ROOM: 'bedrooms',
  USP_AREA: '',
  USP_BEACH: 'to the beach'
};

const lookupUnit = {
  UNIT_SM: 'm²',
  UNIT_FT: 'ft²',
  UNIT_M: 'm',
  UNIT_KM: 'km'
};

export const pluckAttrFromData = (data = [], ...attr) =>
  data.reduce((acc, curr) => [...acc, pluckAttrFromObject(curr, attr)], []);

export const getAccommodationDetails = (data = []) =>
  data.map(
    (elem, index) =>
      `${elem.value}${
        elem.unit ? lookupUnit[elem.unit] || 'invalid unit' : ''
      } ${lookupUSPS[elem.id]}${index < data.length - 1 ? ', ' : ''}`
  );

export const getRating = (rating, total) => {
  const count = Math.round(rating / total);
  return count > 5 ? 5 : count;
};

export const getCurrency = (value, currency = 'EUR', locale = 'en-DE') =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(value);
