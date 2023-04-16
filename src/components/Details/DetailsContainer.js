import React from "react";
import CardDetails from "./CardDetails";
import ChartDetails from "./ChartDetails";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function DetailContainer() {
  return (
    <Row>
      <Col>
        <CardDetails />
      </Col>

      <Col>
        <ChartDetails />
      </Col>
    </Row>
  );
}

export default DetailContainer;
