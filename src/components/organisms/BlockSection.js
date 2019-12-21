import React from 'react';
import AdviceBlock from '../molecules/AdviceBlock';
import SourceBlock from '../molecules/SourceBlock';
import { Container, Row, Col } from 'react-bootstrap';

const BlockSection = () => (
  <>
    <Container fluid>
      <Row>
        <Col>
          <AdviceBlock />
        </Col>
        <Col>
          <SourceBlock />
        </Col>
      </Row>
    </Container>
  </>
);

export default BlockSection;
