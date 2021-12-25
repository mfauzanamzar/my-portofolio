import React from "react";
import "./Content.css";
import Navbar from "./Navbar";

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <div className="content-item">
          <div className="test-image">.</div>
          <div className="item__text">
            <p className="item-text__name">Blog1</p>
            <p className="item-text__desc">Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
