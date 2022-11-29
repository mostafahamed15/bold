import React from "react";
import { FiArrowRight, FiChevronRight } from "react-icons/fi";
import "./styles.css";
function Links() {
  return (
    <div >
      <p className="d-flex justify-content-end  align-items-center animate__animated animate__fadeInTopLeft animate__delay-4s">
        <a href=""   >READ ARTICLE</a>
        <div className="ms-5 arrow">
          <span className="upto ">
            <FiArrowRight />
          </span>
          <span className="upto pt-4">
            <FiChevronRight />
          </span>
          <span className="upto">
            <FiChevronRight />
          </span>
        </div>
      </p>
     
    </div>
  );
}

export default Links;
