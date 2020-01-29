import React from 'react';
import '../css/Cities.css';
import HomeButton from '../assets/homeIcon.png';
import {Link} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

class Cities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      cityFilter: ''
    };
  }
  render() {
    const {
      cities = []
    } = this.props;
    const {error} = this.state;
    
    let filteredCities = cities.filter(city => {
      let cityName = city
        .city
        .toLowerCase();
      return cityName.startsWith(this.state.cityFilter) === true;
    });

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (cities.length === 0) {
      return <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>;
    } else {
      return (
        <div>
          <div className="cities">
            <h1>Cities</h1>
            <label htmlFor="filter">
              Filter By Name
              <input
                type="text"
                id="filter"
                value={this.state.cityFilter}
                onChange={this.handleChange}/>
            </label>

            <ul className="listOfCities">
              {filteredCities.map((city, index) => (
                <Link to={"/itineraries/" + city._id + "/" + city.city}>
                  <li key={cities._id}>
                    {city.city},{city.country}
                  </li>
                </Link>
              ))}
            </ul>
            <Link to="/">
              <img src={HomeButton} id="home" alt="home"/>
            </Link>
          </div>
        </div>
      )
    }
  }
}

export default Cities;