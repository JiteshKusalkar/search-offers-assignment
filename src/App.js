import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import HotelReviewCard from './components/HotelReviewCard';
import { searchOffersRequest } from './actions/searchOffers';

class App extends React.Component {
  componentDidMount() {
    this.props.searchOffers({ searchTerm: 'Mallorca Spanien' });
  }

  render() {
    return (
      <div className='App'>
        <HotelReviewCard data={this.props.data} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.searchOffers.data
});

const mapDispatchToProps = dispatch => ({
  searchOffers: query => {
    return dispatch(searchOffersRequest(query))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
