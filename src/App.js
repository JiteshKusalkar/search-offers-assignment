import styled, { createGlobalStyle } from 'styled-components';
import React from 'react';
import { connect } from 'react-redux';

import { searchOffersRequest } from './actions/searchOffers';
import HotelInformation from './components/HotelInformation';
import ReviewCard from './components/ReviewCard';

import 'font-awesome/scss/font-awesome.scss';

class App extends React.Component {
  componentDidMount() {
    this.props.searchOffers({ searchTerm: 'Mallorca Spanien' });
  }

  renderBody = hotelData => <HotelInformation data={hotelData} />;

  render() {
    return !this.props.isFetching ? (
      <Wrapper>
        <GlobalStyle />
        {this.props.data.map(hotelData => (
          <ReviewCard
            key={hotelData.id}
            body={this.renderBody(hotelData)}
            className='hotel-card'
          />
        ))}
      </Wrapper>
    ) : (
      'Fetching'
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.searchOffers.isFetching,
  data: state.searchOffers.data
});

const mapDispatchToProps = dispatch => ({
  searchOffers: query => {
    return dispatch(searchOffersRequest(query));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const GlobalStyle = createGlobalStyle`
  p {
    margin: 0;
  }
`;

const Wrapper = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  color: #ffab00;
  padding: 15px 0;
`;
