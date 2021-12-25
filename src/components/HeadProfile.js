import React from "react";
import profile from "../images/profile.png";
import "./Head.css";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const HeadProfile = () => {
  const icons = [
    {
      icon: <FaInstagram />,
      link: 'https://instagram.com/mfauzanamzar',
    },
    {
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/mfauzanamzar',
    },
    {
      icon: <FaGithub />,
      link: 'https://github.com/mfauzanamzar',
    },
    {
      icon: <FaWhatsapp />,
      link: 'http://wa.me/6281248615822',
    },
  ];

  return (
    <div className="headprofile">
      <div className="headprofile__image">
        <img src={profile} alt="profile" />
      </div>
      <div className="headprofile__text">
        <p className="text__name">Hi, I'm Muh. Fauzan Amzar</p>
        <p className="text__role">Fullstack Web Developer</p>
        <div className="text__sosmed">
          <ul className="sosmed__list">
            {icons.map(ic => (
              <li className="sosmed__item">
                <a href={ic.link} target="_blank">
                  {ic.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeadProfile;
