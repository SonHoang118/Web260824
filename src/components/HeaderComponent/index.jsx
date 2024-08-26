import React from 'react'
import './index.scss'
import logoImg from '../../assets/images/logo.jpg'

const HeaderComponent = () => {
  return (
    <div className='header'>
      <div className='header_content'>

        <div><a href='/'><img src={logoImg} /></a></div>
        <ul className='navList'>
          <a href='#about'>Giới thiệu</a>
          {/* Năng lực<i className="fa-solid fa-caret-down"></i> */}
          <a href='#service'>Lĩnh vực</a>
          <a href='#contact'>Liên hệ</a>
          <a href='#project'>Dự án</a>
        </ul>
      </div>
    </div>
  )
}

export default HeaderComponent