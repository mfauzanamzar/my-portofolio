import React from "react";
import { IoIosMail } from "react-icons/io";
import { HiDownload } from "react-icons/hi";

const HeadDesc = () => {
  return (
    <div className="headdesc">
      <p className="headdesc-text">
        Seorang mahasiswa semester 7 Universitas Hasnuddin, dengan jurusan Teknik Informatika. tertarik untuk menjadi Fullstack Web Developer. Sudah menguasai ReactJS dengan baik dan memahami Express dan MongoDB.
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
