import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import base_url from './../api/bootapi';

function UpdateCourse() {
    // for redirecting after updating data
    let history = useHistory();
    const initialState = { name: '', description: '' };
    const [course, setCourse] = useState(initialState);

    // array destructuring
    let { id } = useParams();
    useEffect(() => {
        // loading course data from the server
        axios
            .get(`${base_url}/courses/${id}`)
            .then(res => {
                // console.log(res.data);
                const data = res.data;
                setCourse(data);
                toast.warn('Course data has been loaded !');
            })
            .catch(error => {
                console.log(error);
            });
        return () => {
            // cleanup
        };
    }, [id]);

    // form handler function
    const handleForm = event => {
        // passing updating course data to the postRequest function
        postRequest(course);

        event.preventDefault();
    };

    const postRequest = data => {
        axios
            .post(`${base_url}/courses`, data)
            .then(res => {
                console.log(res);
                toast.success('Course has been Updated !');
                setCourse(initialState);
                history.push('/view-courses');
            })
            .catch(error => {
                toast.error('Something went wrong !');
                // console.log(error);
            });
    };

    /**
     * Single change handler for all the input fields.
     * using the name attribute field to get the target fiend.
     */
    const changeHandler = e => {
        // setting values in the course state
        setCourse({ ...course, [e.target.name]: e.target.value });
    };

    // action for the clear button
    const clearAllFields = event => {
        setCourse(initialState);
        event.preventDefault();
    };

    return (
        <div>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="name">UPDATE Course Name</Label>
                    <Input
                        type="text"
                        name="name"
                        value={course.name}
                        id="name"
                        placeholder="Enter course name..."
                        onChange={e => changeHandler(e)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">
                        UPDATE Description of the course
                    </Label>
                    <Input
                        type="textarea"
                        name="description"
                        value={course.description}
                        id="description"
                        placeholder="Enter course description..."
                        onChange={e => changeHandler(e)}
                    />
                </FormGroup>
                <Button type="submit" color="success">
                    Update Course
                </Button>{' '}
                <Button type="button" color="info" onClick={clearAllFields}>
                    Clear
                </Button>
            </Form>
        </div>
    );
}

export default UpdateCourse;
