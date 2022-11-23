import React from 'react'
import { Button, Card, CardGroup, Carousel, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import bg1 from '../Images/bg1.png';
import LoanCalculator from './Loancalculator/LoanCalculator';

const MainDashboard = () => {

  const navigate = useNavigate()
const routetoLC = ()=> {
  navigate('/loancalculator')
}

const RouteToForm = ()=>{
  navigate('/loanapplicationform')
}
  
  return (
    <div> 
      {/* navigation bar */}
    <Navbar style={{ backgroundColor: '#A58CC3' }}sticky='top'>
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
        <div>
              <Button variant='primary' size="lg" className="me-3" type="button" onClick={RouteToForm}>Apply Now!!!</Button>
             
            </div>

        </Container>
        </Navbar>
        <Carousel indicators={false} controls={false} >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bg1}
            alt="First slide"
          />
          {/* <Carousel.Caption className='bg-dark'>
            <h3>LOANS - ONE STOP SOLUTIONS FOR ALL YOUR FINANCIAL NEEDS</h3>
            <p>Build the house you have been thinking of. Buy the car of your dreams. Take that long-pending vacation. Get your children enrolled in the top schools. Do all this and more with loans from Natwest Bank. We offer a wide variety of loans to suit each one of your requirements. Take a look at the products we offer and see for yourself how versatile our range of loans is.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
        </Carousel>
        <br/>
        <br/>

        <Container fluid className='bg-dark text-light' >
        <Row>
          <Col>
            <Card>
              <Carousel indicators={false} controls={false} >
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/7578939/pexels-photo-7578939.jpeg"
                    // https://images.pexels.com/photos/7578939/pexels-photo-7578939.jpeg
                    alt="4th slide"
                  />
                </Carousel.Item>
              </Carousel>

            </Card>
          </Col>
          <Col>
          <div className="container-fluid px-5 py-5"  >     
          <p><h4>NWG Home Loans is the largest Mortgage Provider in the country.            
            NWG Home Loans come to you on the solid foundation of trust and transparency built in the tradition of SBI. It includes options for purchase of ready built property, purchase of under construction property, purchase of pre-owned homes, construction of a house, extension of house and repair/renovation.</h4></p>   
        <p className="col-md-8 fs-5">See how much you could borrow</p>
        <button className="btn btn-success btn-lg" type="button" onClick={routetoLC}>Mortage Calculator</button>
      </div>
          </Col>
        </Row>
      </Container>
      <br/>
      
      <div style={{height:'5vh' }}>
      <h3>Loans and mortgages</h3></div>
      <br/>
      
      {/* cards container */}

      <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg" />
        <Card.Body>
          <Card.Title>Personal Loan</Card.Title>
          <Card.Text>
           Make your dreams come true with our Personal Loans.
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg" />
        <Card.Body>
          <Card.Title>Marriage Loan</Card.Title>
          <Card.Text>
          Make no compromises on your special day. Choose a personal loan for marriage from Natwest Bank and cherish your dream wedding!{' '}
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg" />
        <Card.Body>
          <Card.Title>Payroll Overdraft</Card.Title>
          <Card.Text>
          An Overdraft facility exclusive for our payroll clients.
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/2950003/pexels-photo-2950003.jpeg" />
        <Card.Body>
          <Card.Title>Loan Aganist Property</Card.Title>
          <Card.Text>
          Apply online for Mortgage Loans and borrow upto 70% value of your property.
          </Card.Text>
        </Card.Body>       
      </Card>
    </CardGroup>

     {/* Footer container */}
     <div class= "container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top" >
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg class="bi" width="30" height="24" href="https://www.natwest.com/content/dam/natwest_com/navigation/header/natwest-logo.png"></svg>
      </a>
      <span class=" bg darktext dark">Copyright © National Westminster Bank plc 2022. Registered office: 250 Bishopsgate, London, EC2M 4AA.</span>
    </div>
      <br/>
      <br/>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-muted" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"/></svg></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"/></svg></a></li>
    </ul>
  </footer>
</div>
      
       
         
        </div>
  )
}

export default MainDashboard