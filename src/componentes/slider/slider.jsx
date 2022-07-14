import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTDqBAIoqjHJGySymk8Z2obAmHWmqJgr2bog&usqp=CAU"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUWDGHUl-AdaQiQgBO79L8h0wq0NvBJ9v7LRY-Pz8nJ2KsZ_BPIK_A1vhtb3boEFM5AdA&usqp=CAU"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>SUPER MARIO</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpqPT7ZF7U7v5UnCZpYKv-8Uq0yZDe3oEW1PrAtVbMA4-YENo_iDsTMVD_oBs48379AY0&usqp=CAU" 
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>EA SPORTS 2022</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;