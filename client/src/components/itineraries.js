import React from 'react';
import HomeButton from '../assets/homeIcon.png';
import ItineraryStructure from "../components/itinerarycomponent";
import {Link} from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

class itineraries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      selectedItinerary: ""
    };
  }

  render() {
    const {itineraries} = this.props.itineraries;
    const cityName = this.props.match.params.cityname;
    const {error} = this.state;

    if (itineraries.length === 0) {
      return (
        <div className="itineraries">
          <h1>{cityName}</h1>
          <div>
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
          <div className="itinerariesLink">
            <Link to="/cities" className="otherCities">
              <p>Choose another city</p>
            </Link>
            <Link to="/">
              <img src={HomeButton} id="home" alt="home"/>
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div className="itineraries">
          <h1>{cityName}</h1>
          <ul className="listOfItineraries">
            <li className="scrollbox">
              {itineraries.map((itinerary, index) => (<ItineraryStructure
                key={index}
                className="itinerary.index"
                itinerary={itinerary}
                selectedItinerary={this.state.selectedItinerary}
                changeSelectedItinerary={this.changeSelectedItinerary}/>))}
            </li>
          </ul>
          <div>
            <Link to="/cities">
              <p>Choose another city</p>
            </Link>
            <Link to="/">
              <img src={HomeButton} id="home" alt="home"/>
            </Link>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {itineraries: state.itineraries, cityid: state.cityid};
};

export default itineraries;