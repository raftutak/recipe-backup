import React from 'react';

import { Form, Col, InputGroup, Button } from 'react-bootstrap';

class Calculator extends React.Component {
  state = {};

  render() {
    return (
      <>
        <Form>
          <Form.Row>
            <Col>
              <Form.Control as="select">
                <option value="">Wybierz płeć</option>
              </Form.Control>
            </Col>
          </Form.Row>
        </Form>
      </>
    );
  }
}

export default Calculator;
