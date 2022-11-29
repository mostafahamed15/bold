import React from "react";
import Container from "react-bootstrap/Container";
import CountUp from "react-countup";
import "./styles.css";
function Counter() {
  return (
    <Container className="position-relative">
      <div className="count">
    <CountUp
          end={100}
          className="d-flex justify-content-center align-items-center p-5"
        />
      </div>
      <div className="title py-5 animate__animated animate__fadeInBottomRight animate__delay-2s">
        <h1>Stories</h1>
        <p className="ps-4">from Riangle Team</p>
      </div>
    </Container>
  );
}

export default Counter;
