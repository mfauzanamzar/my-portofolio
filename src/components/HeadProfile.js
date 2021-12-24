import React from 'react'

const HeadProfile = () => {
    return (
        <div className='headprofile'>
            <div className="headprofile__image">
                <img src="../images/profile.png" alt="profile" />
            </div>
            <div className="headprofile__text">
                <h2 className="text__name">Muhammad Fauzan Amzar</h2>
                <h1 className="text__role">Fullstack Developer</h1>
                <div className="text__sosmed"></div>
            </div>
        </div>
    )
}

export default HeadProfile
