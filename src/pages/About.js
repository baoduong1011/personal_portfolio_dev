import React from 'react';

export default function About() {
  return <section className='about' id='about'>
    <h1 className='heading' >about me</h1>
    <div className='content' >
      <h3 className='name' >my name is <span>Bao</span></h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nisi, assumenda aperiam rerum provident voluptatibus magnam architecto molestiae.</p>
      <p>Alias modi, quas illo eaque non laborum facere blanditiis aliquid nemo architecto! Alias modi, quas illo eaque non laborum facere blanditiis aliquid nemo architecto!</p>
    </div>

    <div className='skills'>
      <div className='progress'>
        <h3>html <span>95%</span></h3>
        <div className='bar'>
          <span></span>
        </div>
      </div>

      <div className='progress'>
        <h3>css <span>85%</span></h3>
        <div className='bar'>
          <span></span>
        </div>
      </div>

      <div className='progress'>
        <h3>javascript <span>85%</span></h3>
        <div className='bar'>
          <span></span>
        </div>
      </div>


      <div className='progress'>
        <h3>framework: ReactJS,ExpressJS,... <span>85%</span></h3>
        <div className='bar'>
          <span></span>
        </div>
      </div>
    </div>



  </section>;
}
