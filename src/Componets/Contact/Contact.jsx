import React from 'react'
import './Contact.css'
import Mail from '../../assets/mail_icon.svg'
import Location from '../../assets/location_icon.svg'

function Contact() {

     const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d56701f4-ec9a-4705-b607-c608a5dbfdf8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };



  return (
    <div id='contact' className='contact'>
        <div className="contact-title"><h1>Get in touch</h1></div>
        <div className="contact-section">
            <div className='contact-left'>
                <h1>Let's Talk</h1>
                <p>I'm always looking to grow and learn. If you have opportunities, ideas, or just want to connect—let’s chat!</p>
                <div className="contact-details">
                <div className="contact-detail">
                    <img src={Mail} alt="Mail_Icon" /><p>swadeshwarko@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={Location} alt="Location_Icon" /><p>Chennai,India</p>
                </div>
            </div>  
            </div>
        
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="" >Your Name</label>
                <input type="text"  placeholder='Enter Your Name' />
                <label htmlFor="" >Your Email</label>
                <input type="email" placeholder='Enter Your Email' />
                <label htmlFor="">Write Your Message Here</label>
                <textarea name="message" rows='5' placeholder='Enter Your Message'></textarea>
                <button type="submit" className='contact-submit'>Submit</button>
             </form>
        </div>
      
    </div>
  )
}

export default Contact
