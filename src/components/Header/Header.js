import React from 'react';

export default function Header() {
  return <header>
    <div className='user' >
        <img src='images/baoduong.jpg' alt='' />
        <h3 className='name' >Duong Tuan Bao</h3>
        <p className='post' >Fullstack Developer</p>
    </div>

    <nav className='navbar' >
        <ul>
            <li><a href='#home'>home</a></li>
            <li><a href='#about'>about</a></li>
            <li><a href='#service'>service</a></li>
            <li><a href='#education'>education</a></li>
            <li><a href='#contact'>contact</a></li>
        </ul>
    </nav>
  </header>;
}
