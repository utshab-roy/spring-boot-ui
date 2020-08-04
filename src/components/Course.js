import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
    Button,
    Card,
    CardBody,
    CardSubtitle,
    CardTitle,
    Container,
} from 'reactstrap';
import base_url from './../api/bootapi';

function Course(props) {
    //destructuring the property
    const { course, updateCourse } = props;

    const updateCourseData = (id, event) => {
        console.log('id of courses', id);
    };

    // deleting course from the server
    const deleteCourse = id => {
        axios
            .delete(`${base_url}/courses/${id}`)
            .then(res => {
                // updating the CourseList view
                updateCourse(id);
                toast.error('Course has been deleted !');
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <Card>
                <CardBody className="text-center">
                    <CardTitle className="font-weight-bold">
                        {course.name}
                    </CardTitle>
                    <CardSubtitle>{course.description}</CardSubtitle>

                    <Container className="mt-3">
                        <Link
                            className="btn btn-primary"
                            to={`/update-course/${course.id}`}
                            onClick={e => updateCourseData(course.id, e)}
                        >
                            Edit
                        </Link>{' '}
                        <Button
                            color="danger"
                            onClick={() => deleteCourse(course.id)}
                        >
                            Delete
                        </Button>
                    </Container>
                </CardBody>
            </Card>
        </div>
    );
}

export default Course;
