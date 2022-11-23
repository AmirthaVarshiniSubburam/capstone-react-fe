import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, FloatingLabel, Form, Navbar, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import './CustomButton.css'
import bcrypt from 'bcryptjs';



const Login = () => {

    const navigate = useNavigate();

    const RouteToSignUp = () => {
        navigate("/signup")
    }
    const RouteToHome = () => {
        navigate("/")
    }

    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);
    const [userDetails, setUserDetails] = useState([]);

    const [emailError, setEmailError] = useState(``)
    const [passwordError, setPasswordError] = useState(``)

    var loginValidationStatus = false
    var db_id = ""
    var db_encryptedpwd = ""
    var emailId = false
    // var db_username = ""

    useEffect(() => {
        axios.get(`http://localhost:8080/customerdetails`)
            .then(res => setUserDetails(res.data))
            .catch(err => console.log(err))
    })

    for (let i = 0; i < userDetails.length; i++) {
        if (email.toLowerCase() === (userDetails[i].email).toLowerCase()) {

            db_id = userDetails[i].email;
            db_encryptedpwd = userDetails[i].password;
            // db_username = userDetails[i].username;
            emailId = true
        }
    }


    // const Login = (e) => {
    async function Login(e) {
        e.preventDefault();

        console.log(db_id);
        console.log(emailId);
        loginValidationStatus = await bcrypt.compare(password, db_encryptedpwd)

        if (email === '' || password === '') {
            alert(`Please Fill all the details`)
        }

        else if (!(emailId)) {
            setEmailError(`Email id doesn't exist. Please Sign Up`)
        }
        else if (!loginValidationStatus) {
            setPasswordError(`Invalid Credentials`)
        }

        else if (loginValidationStatus) {
            // setSuccessMsg("login success. Navigating to dashboard...")
            let loginUser = {
                "email": email,
                "password": password
            }
            axios.post(`http://localhost:8080/login`, loginUser)
                .then((response) => {

                    console.log(response.data.jwtToken);
                    localStorage.setItem('jwtToken', response.data.jwtToken)
                    localStorage.setItem('email', email)
                    navigate(`/maindashboard`)
                })
                .catch(error => { console.log(error) })

            axios.get(`http://localhost:8080/customerdetails/${db_id}`).then((response) => {

                console.log(response.data);
                localStorage.setItem('loggedUser', JSON.stringify(response.data))

            })
                .catch(error => console.log(error))
            // navigate("/dashboard")

        }


        else {
            // alert(`Password doesnt match our records`)

        }
    }

    return (
        <div>
            {/* navigation bar */}
            <Navbar style={{ backgroundColor: '#A58CC3' }} sticky='top'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://th.bing.com/th/id/OIP.Zm_wWlK5a5-284unhYzU8wHaHa?pid=ImgDet&rs=1"
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
                        Natwest Group
                    </Navbar.Brand>
                </Container>
            </Navbar>
            {/* LOgin form part */}
            <Container >
                <Row className="mt-4 pt-4 ">
                    <Col lg={4} md={6} sm={9} style={{ backgroundColor: '#C8B9D6', borderRadius: '3%' }} className="p-3 m-auto shadow-lg rounded-lg " >
                        <Form style={{ backgroundColor: '#C8B9D6' }} >
                            <h4 className='text-center' >Natwest Group</h4>
                            <h6 className='mb-3 text-center' >Please Login into Continue </h6>
                            <FloatingLabel controlId="loginUserEmail" label="Email ID" className="mb-3" autoComplete="off" >
                                <Form.Control type="email" placeholder="name@example.com"
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                        setEmailError(``)
                                    }}
                                    isInvalid={!!emailError}
                                />

                                <Form.Control.Feedback type='invalid'>
                                    {emailError}
                                </Form.Control.Feedback>

                            </FloatingLabel>

                            <FloatingLabel controlId="loginUserPassword" label="Password" className="mb-3" autoComplete="off" >
                                <Form.Control type="password" placeholder="Password"
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                        setPasswordError(``)
                                    }}

                                    isInvalid={!!passwordError}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {passwordError}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                            <div className='text-center span2'>

                                <Button type='submit' variant='primary' className='m-2 btn' onClick={Login} >Login</Button>

                                <Button type='reset' variant='warning' className='m-2 btn' >Reset</Button>
                            </div>

                            <div className='text-center mt-3 '>
                                <h6>If you don't have account Sign up here!!</h6>
                                <Button variant='secondary' className='mb-3' onClick={RouteToSignUp} >Sign Up</Button>
                            </div>
                            <div className='text-center'>

                                <Button variant="success" className='mb-3' onClick={RouteToHome} >Back to Home</Button>
                            </div>
                        </Form>

                    </Col>
                </Row>
            </Container>

        </div>

    )
}

export default Login