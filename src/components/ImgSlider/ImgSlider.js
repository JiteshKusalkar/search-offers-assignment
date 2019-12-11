import styled from 'styled-components';
import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImgSlider = ({ images, name }) => {
  const sliderSettings = {
    dots: false,
    centerMode: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0
  };

  return (
    <Wrapper>
      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <img key={`${name}-${index}`} src={image} alt={name} />
        ))}
      </Slider>
    </Wrapper>
  );
};

ImgSlider.propTypes = {
  images: PropTypes.array,
  name: PropTypes.string
};

ImgSlider.defaultProps = {
  images: [],
  name: 'image'
};

const Wrapper = styled.div`
  .slick-next {
    right: 0;
    z-index: 1;
  }

  .slick-prev {
    left: 0;
    z-index: 1;
  }
`;

export default ImgSlider;
