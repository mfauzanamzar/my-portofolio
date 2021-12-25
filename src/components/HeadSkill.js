import React from 'react'
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';

const HeadSkill = () => {

        const skills = [
          {
            icon: <FaHtml5 />,
            name : 'HTML'
          },
          {
            icon: <FaCss3 />,
            name : 'CSS'
          },
          {
            icon: <FaJs />,
            name : 'Javascript'
          },
          {
            icon: <FaReact />,
            name : 'ReactJS'
          },
          {
            icon: <FaNodeJs />,
            name : 'NodeJS'
          },
        ];

    return (
        <div>
        <div className="headskill">
            <p className="headskill-title">My Skills</p>
            <div className="headskill-name">
                {skills.map(skill => (
                    <p><span>{skill.icon}</span> {skill.name}</p>
                ))}
            </div>
        </div>
        <div className="border-line line-profile"></div>
        </div>
        
    )
}

export default HeadSkill
