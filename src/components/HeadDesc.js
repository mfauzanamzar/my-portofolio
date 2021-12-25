import React from "react";
import { IoIosMail } from "react-icons/io";
import { HiDownload } from "react-icons/hi";

const HeadDesc = () => {
  return (
    <div className="headdesc">
      <p className="headdesc-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        placeat, porro magni omnis laborum voluptas totam repellendus repellat
        vel voluptatum at explicabo inventore autem ea vero, eveniet enim eaque
        doloribus.
      </p>
      <div className="headdesc-button">
        <a href="mailto: mfauzanamzar@gmail.com" className="btn-email btn">
          <span className="icon">
            <IoIosMail />
          </span>
          Email Me
        </a>
        <a
          href="https://drive.google.com/uc?export=download&id=1uUQF1ab9FfoS6LGzOOykXLdeN5jP17qj"
          className="btn-cv btn"
        >
          <span className="icon">
            <HiDownload />
          </span>
          Download CV
        </a>
      </div>
      <div className="border-line line-profile"></div>
    </div>
  );
};

export default HeadDesc;
