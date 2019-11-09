import React from 'react';
import './App.css';

import List from './components/List/List'
import { Form, Col, Button, Row, Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
          <Col lg="12">
            <h1>VUTTR</h1>
            <h2>Very Useful Tools to Remember</h2>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

              </Form.Row>

              <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <List />
      </Container>
    </div>
  );
}

export default App;
