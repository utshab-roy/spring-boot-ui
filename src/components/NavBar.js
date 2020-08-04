import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';

function NavBar() {
    return (
        <div>
            <ListGroup>
                <Link className="list-group-item list-group-item-action" to="/">
                    Home
                </Link>

                <Link
                    className="list-group-item list-group-item-action"
                    to="/view-courses"
                >
                    View Courses
                </Link>

                <Link
                    className="list-group-item list-group-item-action"
                    to="/add-course"
                >
                    Add course
                </Link>
                <Link className="list-group-item list-group-item-action" to="#">
                    About
                </Link>
                <Link className="list-group-item list-group-item-action" to="#">
                    Contact
                </Link>
            </ListGroup>
        </div>
    );
}

export default NavBar;
