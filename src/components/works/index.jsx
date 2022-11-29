import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WorkCard from '../workCard';
function Works() {
  return (
<Container>
<Row >
        <Col lg={6} className='px-0 '><WorkCard></WorkCard></Col>
        <Col lg={6} className='px-0 '><WorkCard></WorkCard></Col>
      </Row>
      <Row >
        <Col lg={6} className='px-0 '><WorkCard></WorkCard></Col>
        <Col lg={6} className='px-0 '><WorkCard></WorkCard></Col>
      </Row>
</Container>
  )
}

export default Works