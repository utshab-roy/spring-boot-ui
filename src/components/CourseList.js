import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { CardColumns } from 'reactstrap';
import base_url from './../api/bootapi';
import Course from './Course';

function CourseList() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios
            .get(`${base_url}/courses`)
            .then(res => {
                // console.log(res.data);
                const data = res.data;
                setCourses(data);
                toast.success('Courses has been loaded !');
            })
            .catch(error => {
                console.log(error);
            });

        return () => {
            // cleanup
        };
    }, []);

    /**
     * an example of filter function:
     * const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
     * const result = words.filter(word => word.length > 6);
     * console.log(result);
     * // expected output: Array ["exuberant", "destruction", "present"]
     */

    // by using filter function we are removing the deleted course form the list
    const updateCourseList = id => {
        const updatedCourseList = courses.filter(course => course.id !== id);
        setCourses(updatedCourseList);
    };

    /**
     * () => ({ name: 'Amanda' })  // Shorthand to return an object
     *
     * () => {
     *    return { name : 'Amanda' }
     * }
     */

    // course list iteration
    const courseList = courses.map((course, index) => (
        // return JSX using shorthand return statement
        <Course key={index} course={course} updateCourse={updateCourseList} />
    ));

    return (
        <div>
            <h1>List of courses</h1>
            <CardColumns>
                {courses.length > 0 ? courseList : 'No courses available'}
            </CardColumns>
        </div>
    );
}

export default CourseList;
