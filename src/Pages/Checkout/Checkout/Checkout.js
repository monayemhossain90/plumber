import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';

const Checkout = () => {
  const hendleFormSubmit = event => {
    event.preventDefault();
  }
  const handleCheckout = () => {
    toast('Thanks for checkout')
  }
  return (
    <div className='container p-5 my-5 w-75 shadow'>
      <Form onSubmit={hendleFormSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Accept Terms and Condition" />
        </Form.Group>

        <Button onClick={handleCheckout} variant="primary" type="submit">
          Checkout
        </Button>
      </Form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Checkout;