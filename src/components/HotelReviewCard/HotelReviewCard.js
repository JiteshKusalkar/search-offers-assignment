import React from 'react';

const HotelReviewCard = ({ data }) => <div>{JSON.stringify(data)}</div>;

HotelReviewCard.defaultProps = {
  data: { value: 'insert' }
};

export default HotelReviewCard;
