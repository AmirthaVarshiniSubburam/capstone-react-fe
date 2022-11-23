/**
 * Created by rafal on 28/02/2017.
 */
import React, { Component } from 'react';
import {Button, ButtonGroup, Col, ListGroup} from 'react-bootstrap';


class RightSide extends Component {
    render() {
        return (
            <Col className="rightSide" xs={12} md={6}>
                <h4>Total amount to repay</h4>
                <span  className="totalAmountDisplay">{this.props.currancy}{this.props.amount}</span>

                <h4>Monthly instaltment</h4>
                <span className="monthlyInstDisplay">{this.props.currancy}{this.props.monthly}</span>

                <h4>Annual Percentage rate</h4>
                <span className="aprDisplay">{this.props.APR}%</span>

                <h4>Choose your credit rating to get your EMI details</h4>                

                <ButtonGroup justified>
                    <Button   bsStyle="success" id="Excellent" onClick={this.props.btnOnClick} >Excellent</Button> {' '} <br/>
                    <Button   bsStyle="info" id="Good" onClick={this.props.btnOnClick} >Good</Button>{' '}
                    <Button   bsStyle="primary" id="Fair" onClick={this.props.btnOnClick}>Fair</Button>{' '}
                </ButtonGroup>

            <br/>
            <br/>
            
            <strong>Credit Score Category Range</strong>  
            <br/>  
            <ListGroup as="ul" >
      <ListGroup.Item as="li" variant='success'>Excellent 750 & Above </ListGroup.Item>
      <ListGroup.Item as="li" variant='warning'>Good 700 - 749</ListGroup.Item>
      <ListGroup.Item as="li" variant='danger'>Fair 650 - 699</ListGroup.Item>
    </ListGroup>
        

            </Col>

        )
    }
}

export default RightSide;