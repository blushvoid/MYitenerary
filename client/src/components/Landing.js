import React from 'react';
//import {Container} from 'react-bootstrap';
import logo from '../assets/logo.png';
//import { Link } from 'react-router-dom';
import CitiesCarousel from './CitiesCarousel';
import CTA from '../assets/CTA.png';
import '../css/Landing.css'

class Landing extends React.Component {
  render() {
    return (
      <div>
        <div className="">
          <header className="">
            <img src={logo} className="logo" alt="logo"/>
            <p>Find your perfect trip, designed by insiders who know and love their cities.</p>
          </header>

          <section className="call-to-action">
            <img src={CTA} className="CTA" alt="circle arrow"/>
          </section>
          <br/>
          <section className="popular-itineraries">

            <div className='itineraries-wrapper'>
              <h3>Popular MYtineraries</h3>
              <CitiesCarousel/>
            </div>
          </section>

        </div>
      </div>
    )
  }

}

export default Landing;