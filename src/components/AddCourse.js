import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import base_url from './../api/bootapi';

function AddCourse() {
    const initialState = { name: '', description: '' };
    const [course, setCourse] = useState(initialState);

    // form handler function
    const handleForm = event => {
        // passing course data to the postRequest function
        postRequest(course);
        event.preventDefault();
    };

    const postRequest = data => {
        axios
            .post(`${base_url}/courses`, data)
            .then(res => {
                console.log(res);
                toast.success('New course has been added !');
                setCourse(initialState);
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
                    <Label for="name">Course Name</Label>
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
                    <Label for="description">Description of the course</Label>
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
                    Submit
                </Button>{' '}
                <Button type="button" color="info" onClick={clearAllFields}>
                    Clear
                </Button>
            </Form>
        </div>
    );
}

export default AddCourse;
