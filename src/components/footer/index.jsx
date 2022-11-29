import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./styles.css";
function Footer() {
  return (
    <div>
      <div class="parant border-top mt-5">
        <div className="item1 p-4  ">
          © 2013 - 2022 Riangle - All rights reserved.
        </div>
        <div className="item2 d-flex align-items-center justify-content-center">
       
          <div className="d-flex align-items-center justify-content-center">
          <svg   width="25" height="20" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 0L15 7.999H5L10 0Z" fill="#F43333"></path><path d="M5 7.99902L10 15.998H0L5 7.99902Z" fill="#F43333"></path><path d="M15 7.99902L20 15.998H10L15 7.99902Z" fill="#F43333"></path></svg>
          </div>
        </div>
        <div className="item3 d-flex align-items-center justify-content-center">
          TWITTER
        </div>
        <div className="item4 d-flex align-items-center justify-content-center">
          INSTAGRAM
        </div>
        <div className="item5 d-flex align-items-center justify-content-center">
          DRIBBBLE
        </div>
      </div>
    </div>
  );
}

export default Footer;
