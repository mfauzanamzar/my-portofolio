import React from 'react'
import HeadDesc from '../components/HeadDesc'
import HeadProfile from '../components/HeadProfile'
import HeadSkill from '../components/HeadSkill'
import './Profile.css'

const Profile = () => {
    return (
        <div className='Profile'>
            <HeadProfile/>
            <HeadDesc/>
            <HeadSkill/>
        </div>
    )
}

export default Profile
