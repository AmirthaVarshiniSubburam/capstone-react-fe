import axios from 'axios';
import React from 'react'
import { Button, Col, Container, FloatingLabel, Form, Navbar, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Registration = () => {

    const navigate = useNavigate();

    const RouteToLogin = () => {
        navigate("/login")
    }
    const RouteToHome = () => {
        navigate("/")
    }

    const { register, handleSubmit, formState: { errors }, trigger } = useForm();

    const NewCustomerSignUp = (formData, e) => {
        // async function SignUp(event){
        e.preventDefault()
        console.log(formData);

        let newUser = {
            "email": formData.useremail,
            "firstname": formData.Firstname,
            "lastname": formData.Lastname,
            "mobileNo": formData.mobileno,
            "accountNo": formData.accountno,
            "password": formData.password
        }

        console.log(newUser);

        axios.post(`http://localhost:8080/customerdetails`, newUser)
            .then(response => {
                console.log(response)

                alert(`Sign Up SuccessFull`)
                navigate(`/login`)
            })
            .catch(error => {
                console.log(error)
            })
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
            {/* Registration form */}
            <Container >
                <Row className="mt-4 pt-4 ">
                    <Col lg={4} md={6} sm={9} style={{ backgroundColor: '#A58CC3', borderRadius: '3%' }} className="p-3 m-auto shadow-lg rounded-lg" >
                        <Form style={{ backgroundColor: '#A58CC3' }} onSubmit={handleSubmit(NewCustomerSignUp)} >
                            <h4 className='text-center' >Registration Form</h4>

                            <FloatingLabel controlId="loginUserEmail" label="Email ID" className="mb-3" autoComplete="off" >
                                <Form.Control type="email" placeholder="name@example.com"
                                    {...register('useremail', { required: true, pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/ })}

                                    isInvalid={!!errors.useremail}
                                    onKeyUp={() => {
                                        trigger("useremail");
                                    }}


                                />

                                <Form.Control.Feedback type='invalid'>
                                    {errors.useremail?.type === 'required' && 'Email is Required'}
                                    {errors.useremail?.type === 'pattern' && 'Please enter a valid email'}

                                </Form.Control.Feedback>

                            </FloatingLabel>


                            <FloatingLabel controlId="loginFirstname" label="Firstname" className="mb-3" autoComplete="off" >
                                <Form.Control type="text" placeholder="Firstname"
                                    {...register('Firstname', { required: true, pattern: /[A-Za-z]{3,25}/ })}

                                    isInvalid={!!errors.Firstname}
                                    onKeyUp={() => {
                                        trigger("Firstname");
                                    }}


                                />

                                <Form.Control.Feedback type='invalid'>
                                    {errors.Firstname?.type === 'required' && 'Firstname is Required'}
                                    {errors.Firstname?.type === 'pattern' && 'Firstname must be between 3 - 25 characters'}
                                </Form.Control.Feedback>

                            </FloatingLabel>

                            <FloatingLabel controlId="loginLastname" label="Lastname" className="mb-3" autoComplete="off" >
                                <Form.Control type="text" placeholder="Lastname"
                                    {...register('Lastname', { required: true, pattern: /[A-Za-z]{3,25}/ })}

                                    isInvalid={!!errors.Lastname}
                                    onKeyUp={() => {
                                        trigger("Lastname");
                                    }}


                                />

                                <Form.Control.Feedback type='invalid'>
                                    {errors.Lastname?.type === 'required' && 'Lastname is Required'}
                                    {errors.Lastname?.type === 'pattern' && 'Lastname must be between 3 - 25 characters'}
                                </Form.Control.Feedback>

                            </FloatingLabel>

                            <FloatingLabel controlId="MobileNo" label="Mobile No" className="mb-3" autoComplete="off" >
                                <Form.Control type="number" placeholder="Mobile No"
                                    {...register('mobileno', { required: true, pattern: /[0-9]\d{09}$/ })}
                                    isInvalid={!!errors.mobileno}
                                    onKeyUp={() => {
                                        trigger("mobileno");
                                    }}

                                />

                                <Form.Control.Feedback type='invalid'>
                                    {errors.mobileno?.type === 'required' && 'Please Enter Your 10 Digit Mobile No'}
                                    {errors.mobileno?.type === 'pattern' && 'Please Enter Your 10 Digit Mobile No'}
                                </Form.Control.Feedback>

                            </FloatingLabel>


                            <FloatingLabel controlId="AccountNo" label="Account No" className="mb-3" autoComplete="off" >
                                <Form.Control type="number" placeholder="Account No"
                                    {...register('accountno', { required: true, pattern: /[0-9]\d{06}$/ })}
                                    isInvalid={!!errors.accountno}
                                    onKeyUp={() => {
                                        trigger("accountno");
                                    }}

                                />

                                <Form.Control.Feedback type='invalid'>
                                    {errors.accountno?.type === 'required' && 'Please Enter Your 7 Digit Account No'}
                                    {errors.accountno?.type === 'pattern' && 'Please Enter Your 7 Digit Account No'}
                                </Form.Control.Feedback>
                            </FloatingLabel>

                            <FloatingLabel controlId="loginUserPassword" label="Password" className="mb-3" autoComplete="off" >
                                <Form.Control type="password" placeholder="Password"
                                    {...register('password', { required: true, pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#%^&])(?!.* ).{8,20}$/ })}
                                    isInvalid={!!errors.password}
                                    onKeyUp={() => {
                                        trigger("password");
                                    }}

                                />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.password?.type === 'required' && 'Password is Required'}
                                    {errors.password?.type === 'pattern' && '`Your password should contain atleast 8 characters. Must Contain 1 uppercase, 1 lowercase, 1 numeric and atleast 1 symbols ( @ # % ^ & - _ )'}
                                </Form.Control.Feedback>
                            </FloatingLabel>

                            <div className='text-center span2'>

                                <Button type='submit' variant='primary' className='m-2 btn'>Sign Up</Button>

                                <Button type='reset' variant='warning' className='m-2 btn' >Reset</Button>
                            </div>
                            {/* <div className='text-center mt-3 '>
                                <h6>Remember your creditials!!</h6>
                                <Button variant='secondary' className='mb-3' onClick={RouteToLogin} >Login</Button>
                            </div> */}
                            <div className='text-center'>
                                <h6> To login visit our homepage</h6>
                                <Button variant="success" className='mb-3' onClick={RouteToHome} >Back to Home</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Registration