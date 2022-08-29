import React from 'react'
import { IoIosMail } from 'react-icons/io'
import { HiDownload } from 'react-icons/hi'

const HeadDesc = () => {
  return (
    <div className='headdesc'>
      <p className='headdesc-text'>
        Seorang mahasiswa semester 8 Universitas Hasnuddin, dengan jurusan
        Teknik Informatika. Memiliki ketertarikan untuk menjadi Front-End
        Developer React JS.
      </p>
      <div className='headdesc-button'>
        <a href='mailto: mfauzanamzar@gmail.com' className='btn-email btn'>
          <span className='icon'>
            <IoIosMail />
          </span>
          Email Me
        </a>
        <a
          target='_blank'
          href='https://drive.google.com/file/d/1Rf66Jf0X6m9BK5yNLeGxO_v_rHxZkC7v/view?usp=sharing'
          className='btn-cv btn'
        >
          <span className='icon'>
            <HiDownload />
          </span>
          Download CV
        </a>
      </div>
      <div className='border-line line-profile'></div>
    </div>
  )
}

export default HeadDesc
