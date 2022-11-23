import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Navbar, Row, Table, Toast, ToastContainer } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const LoanTracker = () => {
  const loggeduser = JSON.parse(localStorage.getItem('loggedUser'));
  const [loanapplication, setloanapplication] = useState([]);
  

  const navigate = useNavigate()
  const RouteToHomepage = () => {
    navigate(`/`)
    localStorage.clear()

  }

  // const headers=[
  // {lable:"Name", key:"fname"};
  // { label: "Mobile Number", key: "mobno" },
  // { label: "Loan type", key: "loantype" },
  // { label: "Loan Amount required", key: "amount" },
  // { label: "Loan ID", key: "" },
  // { label: "Status", key: "" },

  // ]

  // const load = () => {

  // console.log(loggeduser);
  // axios.get(`http://localhost:8080/loanapplicationform/mobno?mobno=${loggeduser.mobno}`)

  // useEffect(() => {

    const load = () => {
      const formDetails = JSON.parse(localStorage.getItem('formDetails'));
    axios.get(`http://localhost:8080/loanapplicationform/mobno?mobno=${loggeduser.mobileNo}`)
      .then(response => {
        // console.log(response.data)
        setloanapplication(response.data)
      })
      .catch(error => console.log(error))
    }

  // })

  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);
  const [position, setPosition] = useState('bottom-end');

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
          <Navbar.Collapse className="justify-content-end">

            <Button variant="secondary" size="sm" className="ms-3" onClick={RouteToHomepage} >Logout</Button>
          </Navbar.Collapse>


        </Container>
      </Navbar>

      {/* <div
        aria-live="polite"
        aria-atomic="true"
        className="bg-dark position-relative"
        style={{ minHeight: '120px' }}
      > */}
      <ToastContainer className="p-3" position={position} >
        <Toast>
          <Toast.Header className='text-light' closeButton={false} style={{ backgroundColor: '#6F2C91' }}>

            <strong className="me-auto"  >Natwest Group</strong>

          </Toast.Header>
          <Toast.Body className='text-light' style={{ backgroundColor: '#A58CC3' }}>
            Hello {loggeduser.firstname} ...Thanks for choosing us for your loan need.For more details about your loan progress please vist the nearest branch.</Toast.Body>
        </Toast>
      </ToastContainer>


      <Container className='mt-5 pt-1' style={{ backgroundColor: '#F4F0E8', borderRadius: '15px' }} >
        <div>

          <h4 className="d-flex justify-content-centre" > Welcome  {loggeduser.firstname} !!! Please Check your loan details as below</h4>

          <div className='m-3' >
            <Button className='me-3' onClick={load}>Refresh</Button>
          </div>
        </div>


      </Container>

      <Container>
        <Table striped bordered hover style={{ backgroundColor: '#A58CC3' }}>
          <thead>
            <tr>
              <th>Loan ID</th>
              <th>Name</th>
              <th>Mobile Number</th>
              <th>Loan Type</th>
              <th>Loan Amount required</th>
              <th>Status</th>

            </tr>
          </thead>
          <tbody>
            {
            loanapplication.map(loanapplication =>

            <tr key = {loanapplication.loanid}>
              <td>{loanapplication.loanid}</td>
              <td>{loanapplication.fname}</td>
              <td>{loanapplication.mobno}</td>
              <td>{loanapplication.loantype}</td>
              <td>{loanapplication.amount}</td>

              <td>Pending</td>
            </tr>

             )} 
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default LoanTracker