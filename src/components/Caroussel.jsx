import Carousel from 'react-bootstrap/Carousel';
import jumbotronImg from '../assets/img/jumbotronImg'

export const Caroussel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={jumbotronImg.img5}
                    alt="First slide"
                    height={800}
                />
                <Carousel.Caption className='badge bg-dark text-wrap'>
                    <h2>Marcelo Paiva Gómez</h2>
                    <h6>Desarrollo Full-Stack.</h6>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
