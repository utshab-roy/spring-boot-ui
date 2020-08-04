import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
function Header() {
    return (
        <>
            <Card className="mb-3 text-center display-4" color="success">
                <CardBody>
                    <CardTitle>Welcome to the App</CardTitle>
                </CardBody>
            </Card>
        </>
    );
}

export default Header;
