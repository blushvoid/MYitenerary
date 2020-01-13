import React, {useState} from 'react';
import {Carousel, Card, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';
import CityImages from './CityImages';

const Styled = styled.div `
.carousel-control-prev-icon,
.carousel-control-next-icon {
  height: 100px;
  width: 100px;
  outline: black;
  background-size: 100%, 100%;
  background-image: none;
}

.carousel-control-next-icon:after
{
  content: '>';
  font-size: 30px;
  color: black;
}

.carousel-control-prev-icon:after {
  content: '<';
  font-size: 30px;
  color: black;
}

.carousel-indicators li {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 10px;
  text-indent: 0;
  border: none;
  border-radius: 50%;
  background-color: black;  
}
.carousel-indicators .active {
  width: 10px;
  height: 10px;
  margin: 10px;
  background-color: #ecb920;
}

.row {
  display: flex;
  justify-content: center;
}

.card {
  border: none;
}

@media only screen and (max-width: 560px) {
  .card-title {
    font-size: 17px;
    
  }

}


          `;

function CitiesCarousel() {
  const [index,
    setIndex] = useState(0);
  const [direction,
    setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Styled>
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>

        <Carousel.Item>
          <Row>
            <Col xs={5}>
              <Card style={{}}>
                <Card.Img
                  className="img-responsive"
                  src={CityImages.amsterdam}
                  alt="Amsterdam"/>
                <Card.Body>
                  <Card.Title>Amsterdam</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={5}>
              <Card style={{}}>
                <Card.Img
                  className="img-responsive"
                  src={CityImages.barcelona}
                  alt="Barcelona"/>
                <Card.Body>
                  <Card.Title>Barcelona</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={5}>
              <Card style={{}}>
                <Card.Img
                  className="img-responsive"
                  src={CityImages.newyork}
                  alt="New York"/>
                <Card.Body>
                  <Card.Title>New York</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={5}>
              <Card style={{}}>
                <Card.Img
                  className="img-responsive"
                  src={CityImages.paris}
                  alt="Paris"/>
                <Card.Body>
                  <Card.Title>Paris</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col xs={5}>
              <Card style={{}}>
                <Card.Img
                  className="img-responsive"
                  src={CityImages.dublin}
                  alt="Dublin"/>
                <Card.Body>
                  <Card.Title>Dublin</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={5}>
              <Card style={{}}>
                <Card.Img
                  className="img-responsive"
                  src={CityImages.rome}
                  alt="Rome"/>
                <Card.Body>
                  <Card.Title>Rome</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={5}>
              <Card style={{}}>
                <Card.Img
                  className="img-responsive"
                  src={CityImages.berlin}
                  alt="Berlin"/>
                <Card.Body>
                  <Card.Title>Berlin</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={5}>
              <Card style={{}}>
                <Card.Img
                  className="img-responsive"
                  src={CityImages.prague}
                  alt="Prague"/>
                <Card.Body>
                  <Card.Title>Prague</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col xs={5}>
              <Card style={{}}>
                <Card.Img
                  className="img-responsive"
                  src={CityImages.budapest}
                  alt="Budapest"/>
                <Card.Body>
                  <Card.Title>Budapest</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={5}>
              <Card style={{}}>
                <Card.Img
                  className="img-responsive"
                  src={CityImages.madrid}
                  alt="Madrid"/>
                <Card.Body>
                  <Card.Title>Madrid</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={5}>
              <Card style={{}}>
                <Card.Img
                  className="img-responsive"
                  src={CityImages.lisbon}
                  alt="Lisbon"/>
                <Card.Body>
                  <Card.Title>Lisbon</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={5}>
              <Card style={{}}>
                <Card.Img
                  className="img-responsive"
                  src={CityImages.london}
                  alt="London"/>
                <Card.Body>
                  <Card.Title>London</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Styled>
  );
}

export default CitiesCarousel;
