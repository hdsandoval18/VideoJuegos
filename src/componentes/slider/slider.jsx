import Carousel from 'react-bootstrap/Carousel';
import Home from '../../view/Home';
import mario from '../img/mario.jpg';
import fifa from '../img/fifa.webp';
import GUERRA from '../img/GUERRA.webp';


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mario}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>SUPER MARIO</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fifa}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>EA SPORTS 2022</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={GUERRA}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>WAR</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;