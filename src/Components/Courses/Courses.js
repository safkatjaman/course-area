import React, { useState } from 'react';
import courses from '../../FakeData/FakeData'
import Course from '../Course/Course';
import { Jumbotron, Row, Col } from 'react-bootstrap';
import Cart from '../Cart/Cart';

const Courses = () => {
    const First15Course = courses.slice(0,15);
    const [course,setCourse] = useState(First15Course);
    const [cart, setCart] = useState([]);

    const addCourse = (addCourses) =>{
        console.log("Course Clicked",addCourses);
        const newCart = [...cart,addCourses];
        setCart(newCart);
        //console.log(newCart);
    }

    return (
        <div>
            
            <Row>
                <Col md={9} lg={9} xs={9}>
                    <Jumbotron fluid className="bg-white mb-0 pb-0 pr-0">
                        {
                            course.map(products=><Course productObj={products}
                            addCourse={addCourse}></Course>)
                        }
                    </Jumbotron>
                </Col>
                <Col md={3} lg={3} xs={3} className="w-70">
                        <Jumbotron fluid className="bg-white mb-0 mr-0 pb-0 ml-0 pl-0 pr-0">
                            <Cart cart={cart}></Cart>
                        </Jumbotron>
                </Col>
            </Row>
            
        </div>
    )
};

export default Courses;