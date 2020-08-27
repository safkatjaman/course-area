import React from 'react';
import {Container, Card, Button } from 'react-bootstrap';

const Course = (props) => {
    const {image,name,instructor,price} = props.productObj;

    return (
        <div>
                <Container className="mr-0">
                    <Card className="mb-3 w-75">
                        <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <h1>{name}</h1>
                                <h5>Instructor:{instructor}</h5>
                                <h3>Price:${price}</h3>
                                <Button variant="dark" onClick={()=>props.addCourse(props.productObj)}>
                                    Enroll Now</Button>
                            </Card.Body>
                    </Card>
                </Container>
        </div>
    );
};

export default Course;