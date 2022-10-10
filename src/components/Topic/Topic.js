import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { name, logo, total, id } = topic;
    return (
        <Col>
            <Card className='shadow my-5'>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title className='fw-bold'>Quiz: {name}</Card.Title>
                    <Card.Text className='fw-bold'>No. of questions: {total}</Card.Text>
                    <Button className='w-100 fw-semibold d-flex justify-content-center align-items-center'>
                        <Link className='text-white text-decoration-none' to={`/quiz/${id}`}>
                            Start Quiz
                            <FontAwesomeIcon className='ms-2 text-white' icon={faArrowCircleRight} />
                        </Link>

                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Topic;