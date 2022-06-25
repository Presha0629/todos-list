import React from 'react';
import { Col, Container, Form, Button, Row } from "react-bootstrap";

const LoginPage = () => {
    // const adminUser =
    //     {
    //         email: "admin@admin.com",
    //         password: "admin123"

    //     }

    //     const normalUser= {
    //         email: 'user',
    //         password: 'user'
    //     }
        
    //     const[user, setUser] = useState({name: "", email:""});
    //     const[error, setError]= useState("");

    //     const login= detail => {
    //         console.log(details);

    //     }

    //     const Logout =() =>{
    //         console.log("Logout");
    //     }

        
    
    return (
        <>
            <Container>
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Login</h1>
                <Row>
                    <Col lg={5} md={6} sm={12} className="">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                        
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                             
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default LoginPage