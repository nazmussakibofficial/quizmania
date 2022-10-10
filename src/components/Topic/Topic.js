import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const Topic = ({ topic }) => {
    const { name, logo, total, id } = topic;
    return (
        <Col>
            <Card className='shadow'>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>Quiz: {name}</Card.Title>
                    <Card.Text>No. of questions: {total}</Card.Text>
                    <Button className='w-100 fw-bold d-flex justify-content-center align-items-center'>
                        Start Quiz
                        <FontAwesomeIcon className='ms-2' icon={faArrowCircleRight} />
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Topic;