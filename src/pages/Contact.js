import React from 'react';

export default function Contact() {
  return <section className='contact' id='contact'>
        <h1 className='heading'>contact me</h1>
        <div className='row' >
            <form action='' >
                <input type='text' className='box' placeholder='first name' />
                <input type='text' className='box' placeholder='last name' />
                <input type='text' className='box' placeholder='your email' />
                <input type='text' className='box' placeholder='your project' />
                <textarea type='text' className='box message' placeholder='message'></textarea>
                <input type='submit' value='message' className='btn' />
            </form>

            <div className='content' >
                <div className='icons' >
                    <h3><i className='fas fa-map-marker-alt' ></i> address </h3>
                    <p>3 Hai Ba Trung Street , Ben Tre City , Ben Tre , Viet Nam </p>
                </div>

                <div className='icons' >
                    <h3><i className='fas fa-map-envelope' ></i> email </h3>
                    <p>baoduong101110@gmail.com</p>
                </div>

                <div className='icons' >
                    <h3><i className='fas fa-phone' ></i> email </h3>
                    <p>+84345765272</p>
                </div>
            </div>
        </div>
  </section>;
}
