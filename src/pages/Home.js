import React from 'react';
import Typed from "react-typed";

const textLines = [
    `Duong Tuan Bao`
  ];

export default function Home() {
  return <section className='home' id='home' >
        <h3> hi there...</h3>
        <h3 className='name'>my name is <span><Typed strings={textLines} typeSpeed={60} loop /></span> </h3>
        <h3 className='post' >I am a <span className='typing-text'>Fullstack Developer</span></h3>
        <a href='#'><button className='btn' >hire me</button></a>

        <div className='share' >
            <a href='#' className='fab fa-facebook-f'></a>
            <a href='#' className='fab fa-twitter'></a>
            <a href='#' className='fab fa-instagram' ></a>
            <a href='#' className='fab fa-linkedin'></a>
        </div>
  </section>;
}
