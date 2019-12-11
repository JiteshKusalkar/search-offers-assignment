import styled from 'styled-components';
import React from 'react';

import ImgSlider from '../ImgSlider';
import { getAccommodationDetails, getRating } from '../../utils/common';

const ratingTotal = 5;

const getPhotosByType = (photos = [], type, limit = 10) =>
  photos.slice(0, limit).map(photo => photo[type]);

const getStarredRating = count =>
  Array.apply(null, Array(ratingTotal)).map((e, i) =>
    i < count ? (
      <i key={i} className='fa fa-star'></i>
    ) : (
      <i key={i} className='fa fa-star-o'></i>
    )
  );

const HotelInformation = ({ data, className }) => (
  <div>
    <ImgSlider
      images={getPhotosByType(data.photos, 'm')}
      name={data.provider.legalName}
    />
    <HotelInfo>
      <Headline>
        <HotelName>
          <span>{data.details.name}</span>
          <Location>
            <i className='fa fa-map-marker' aria-hidden='true' />
            {data.location.name}
          </Location>
        </HotelName>
        <StayInfo>
          <Nights>{data.price.nights} Nights</Nights>
          <CostOfStay>{data.price.total}</CostOfStay>
        </StayInfo>
      </Headline>
      <AccommodationDetails>
        {getAccommodationDetails(data.usps)}
      </AccommodationDetails>
      <Rating>
        <span>
          {getRating(data.rating.count, ratingTotal)}{' '}
          {getStarredRating(getRating(data.rating.count, ratingTotal))}
        </span>
        <Count>({data.rating.value})</Count>
      </Rating>
    </HotelInfo>
  </div>
);

HotelInformation.defaultProps = {
  data: null,
  className: ''
};

const HotelName = styled.div`
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #414141;
  font-size: 1.125rem;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StayInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const CostOfStay = styled.h2`
  margin: 0;
`;

const Nights = styled.p`
  font-size: 14px;
`;

const HotelInfo = styled.div`
  padding: 15px;
`;

const Location = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #0c6eef;
  font-size: 13px;
  font-weight: 600;

  i {
    margin-right: 5px;
  }
`;

const Headline = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;

  ${StayInfo} {
    flex-basis: 40%;
  }
`;

const AccommodationDetails = styled.div`
  font-size: 14px;
  max-width: 66%;
  line-height: 20px;
`;

const Rating = styled.section`
  color: #0c6eef;
  font-size: 13px;
  font-weight: 600;
`;

const Count = styled.span`
  margin-left: 5px;
  color: #7b7b7b;
`;

export default HotelInformation;
