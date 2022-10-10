import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../img/ed1.jpg'
import slider2 from '../../img/ed2.jpg'
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='container mt-5'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 header-img"
                            src={slider1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className='text-primary bg-white fw-bold'>To be the best, you have to know where you stand</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 header-img"
                            src={slider2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 className='text-primary bg-white fw-bold'>That's why we have prepared some quizzes so you can evaluate yourself</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    );
};

export default Home;