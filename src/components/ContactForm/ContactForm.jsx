import React, { useState } from 'react';
import Style from '../ContactForm/ContactForm.module.css'

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://upskilling-egypt.com:3000/contact', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, number }),
    });

    if (response.ok) {
      alert('Form submitted successfully!');
      setName('');
      setEmail('');
      setNumber('');
    } else {
      alert('Error submitting the form. Please try again.');
    }
  };

  return (
    <>
      <h2 className="text-center">Contact Us</h2>
      <div className="row justify-content-center">
        <div className="col-md-2 text-center align-items-center">
          <div onSubmit={handleSubmit} className='text-center align-items-center justify-content-around'>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="tel" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Phone" required />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            {/* <button type="submit">CONTACT US</button> */}
          </div>
          <div className='text-center pb-5'>
            <button className={`btn text-center align-items-center ${Style.btn}`}>CONTACT US </button>

          </div>

        </div>
      </div>

    </>

  );
}

export default ContactForm;