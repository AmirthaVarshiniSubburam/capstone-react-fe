import axios from 'axios';
import React, { useState } from 'react'
import { Button, Carousel, Col, Container, Form, Navbar, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

import bg2 from '../Images/bg2.PNG';


const LoanApplicationForm = () => {

  //getting and storing inputs from customers
  // const [fname, setFName] = useState(``);
  // const [lname, setLName] = useState(``);
  // const [mobno, setMobNo] = useState(0);
  const [address, setAddress] = useState(``);
  const [city, setCity] = useState(`Chennai`);
  const [state, setState] = useState(`Tamil Nadu`);
  const [zip, setZip] = useState(0);
  const [loanamt, setLoanAmt] = useState(0);
  const [tenure, setTenure] = useState(0);  
  const [occupation, setOccupation] = useState(`Salaried`)
  const [loantype, setLoanType] = useState(`Home Loan`)

  //to display error
  const [fnameError, setFnameError] = useState(``);
  const [lnameError, setLnameError] = useState(``);
  const [mobnoError, setMobnoError] = useState(``);
  const [addressError, setAddressError] = useState(``);
  const [cityError, setCityError] = useState(``);
  const [stateError, setStateError] = useState(``);
  const [zipError, setZipError] = useState(``);
  const [loanamtError, setLoanamtError] = useState(``);
  const [tenureError, setTenureError] = useState(``);

  //regex validations

  var regexAddress = /^[a-zA-Z0-9(?:_*.\-\\,\s)?]{10,100}$/
  var regexMobno = /^[0-9]\d{09}$/
  var regexFname = /[A-Za-z]{3,25}/
  var regexLame = /[A-Za-z]{0,10}/
  var regexZip = /^[0-9]\d{05}$/

  const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))

  var fname = loggedUser.firstname
  var lname = loggedUser.lastname
  var mobno = loggedUser.mobileNo

  const navigate = useNavigate();


  const SaveLoan = (e) => {
    // e.preventdefault();

    if (!regexFname.test(fname)) {
      setFnameError(`Please enter your first name minimum of 3-25 characters`)
    }
    else if (!regexLame.test(lname)) {
      setLnameError(`Please enter last name`)
    }

    else if (!regexMobno.test(mobno)) {
      setMobnoError(`Please enter your 10 digit valid phone number`)
    }
    else if (!regexAddress.test(address)) {
      setAddressError(`Please enter your address 10-100 characters `)
    }
    else if (!regexZip.test(zip)) {
      setZipError(`Please enter your 6 digit pincode`)
    }

    else{

    
    var LoanApp = {
    // "loanid": 0,
    "mobno": mobno,
    "loantype": loantype,
    "fname": fname,
    "lname": lname,
    "occupation": occupation,
    "city": city,
    "address": address,
    "state": state,
    "zip": zip,
    "amount": loanamt,
    "tenure": tenure
    }
  
    console.log(LoanApp);
    axios.post(`http://localhost:8080/loanapplicationform`,LoanApp)
    .then(res => {
      localStorage.setItem('formDetails',JSON.stringify(res.data))
      console.log(res.data);
      })
     .catch(err => console.log(err))
  }
  alert("Loan Application form completed redirecting to tracking page")
    
  navigate('/loantracker')

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

      <Carousel indicators={false} controls={false} >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bg2}
            alt="First slide"
          />

        </Carousel.Item>
      </Carousel>
      <br />
      <br />

      <Container>
        <div >
          <h2> Fill in the Application Form</h2>
        </div>
      </Container>
      <br />
      <Container>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder={fname} disabled onChange={(e) => {
                // setFName(e.target.value);
                // setFnameError(``)
              }}
                isInvalid={!!fnameError} />
              <Form.Control.Feedback type='invalid'>
                {fnameError}
              </Form.Control.Feedback>

            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder={lname} disabled onChange={(e) => {
                // setLName(e.target.value);
                // setLnameError(``)
              }}
                isInvalid={!!lnameError} />
              <Form.Control.Feedback type='invalid'>
                {lnameError}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>


          <Row className="mb-1">
            <Form.Group as={Col} controlId="formGridMobile">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="number" placeholder={mobno} disabled onChange={(e) => {
                // setMobNo(e.target.value);
                // setMobnoError(``)
              }}
                isInvalid={!!mobnoError} />
              <Form.Control.Feedback type='invalid'>
                {mobnoError}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Address" onChange={(e) => {
              setAddress(e.target.value);
              setAddressError(``)
            }}
              isInvalid={!!addressError} />
            <Form.Control.Feedback type='invalid'>
              {addressError}
            </Form.Control.Feedback>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Select defaultValue="Choose..." onChange={(e) => {
                setCity(e.target.value);
                setCityError(``)
              }}
                isInvalid={!!cityError}>

                <option value="Chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Madurai">Madurai</option>
                <option value="Trichy">Trichy</option>

                {/* <Form.Control.Feedback type='invalid'>
                                {cityError}
                            </Form.Control.Feedback> */}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control type="text"  placeholder="Tamil Nadu"
        aria-label="Disabled input example"
        disabled
        readOnly />


              {/* <Form.Control.Feedback type='invalid'>
                {stateError}
              </Form.Control.Feedback> */}
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="number" onChange={(e) => {
                setZip(e.target.value);
                setZipError(``)
              }}
                isInvalid={!!zipError} />
              <Form.Control.Feedback type='invalid'>
                {zipError}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridOccupation">
            <Form.Label>Occupation</Form.Label>
            <Form.Select defaultValue="Choose..." onChange={(e) => {
              (console.log(e.target.value))
              setOccupation(e.target.value)
            }}  >
              {/* <option>-- Select your Occupation --</option> */}
              <option value="Salaried">Salaried</option>
              <option value="Self-Employed">Self-Employed</option>
              <option value="Government Employee">Government Employee</option>
              <option value="Others">Others..</option>
            </Form.Select>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridLoanType">
              <Form.Label>Product type</Form.Label>

              <Form.Select defaultValue="Choose..." onChange={(e) => {
                (console.log(e.target.value))
                setLoanType(e.target.value)
              }}>
                {/* <option>--- Select ---</option> */}
                <option value="Home Loan">Home Loan </option>
                <option value="Mortage Loan">Mortage Loan</option>
                <option value="Land Loan">Land Loan</option>
                <option value="Others">Others...</option>
              </Form.Select>

            </Form.Group>

            <Form.Group as={Col} controlId="formGridLoanAmt">
              <Form.Label>Required Loan Amount</Form.Label>
              <Form.Control type="number" onChange={(e) => {
                setLoanAmt(e.target.value);
                setLoanamtError(``)
              }}
                isInvalid={!!loanamtError} />
              <Form.Control.Feedback type='invalid'>
                {loanamtError}
              </Form.Control.Feedback>

              <small> ***in Lakhs</small>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridMonths">
              <Form.Label>Required Tenure </Form.Label>
              <Form.Control type="number" onChange={(e) => {
                setTenure(e.target.value);
                setTenureError(``)
              }}
                isInvalid={!!tenureError} />
              <Form.Control.Feedback type='invalid'>
                {tenureError}
              </Form.Control.Feedback>
              <small>***in Months</small>
            </Form.Group>
          </Row>



          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="I Agree the above filled details are correct" />
          </Form.Group>

          <Button variant="primary" type="button" onClick={SaveLoan}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default LoanApplicationForm