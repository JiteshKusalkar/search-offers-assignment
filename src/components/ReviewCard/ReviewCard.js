import styled from 'styled-components';
import React from 'react';

const HotelReviewCard = ({ data, header, body, footer, className }) => (
  <Card>
    {header && <CardHeader>{header}</CardHeader>}
    <CardBody>{body}</CardBody>
    {footer && <CardFooter>{footer}</CardFooter>}
  </Card>
);

HotelReviewCard.defaultProps = {
  data: { value: 'insert' },
  className: '',
  header: null,
  body: 'Insert Body',
  footer: null
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 300px;
  min-height: 100%;
  border-radius: 0.3rem;
  position: relative;
  background-color: #ffffff;
  color: #414141;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.13);
  -webkit-transition: box-shadow 0.2s;
  transition: box-shadow 0.2s;
  overflow: hidden;
  margin: 10px;
`;

const CardHeader = styled.div``;

const CardBody = styled.div``;

const CardFooter = styled.div``;

export default HotelReviewCard;
