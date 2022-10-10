import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useLoaderData } from 'react-router-dom';
import sliderimg from '../../img/ed1.jpg'
import Topic from '../Topic/Topic';
import './Home.css'
import Row from 'react-bootstrap/Row';

const Home = () => {
    const topics = useLoaderData();
    const topicsData = topics.data;
    return (
        <div>
            <div className='container mt-5 ms-5'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 header-img"
                            src={sliderimg}
                            alt="First slide"
                        />
                        <Carousel.Caption className='h-100'>
                            <h3 className='text-primary bg-white fw-bold'>To be the best, you have to know where you stand</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 header-img"
                            src={sliderimg}
                            alt="Second slide"
                        />

                        <Carousel.Caption className='h-100'>
                            <h3 className='text-primary bg-white fw-bold'>That's why we have prepared some quizzes so you can evaluate yourself</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Row xs={1} md={4} className="g-4 container mt-3 ms-5">
                {
                    topicsData.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                }
            </Row>

        </div>
    );
};

export default Home;