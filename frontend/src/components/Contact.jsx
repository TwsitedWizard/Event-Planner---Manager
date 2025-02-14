import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast'

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:4000/api/v1/message/send", {name, email, subject, message}, {withCredentials: true, headers:{"Content-Type": "application/json"}}).then(
      res=>{
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
    ).catch(error=>{
      toast.error(error.response.data.message);
    })
  };
  
  return (
    <>
      <div className="contact container">
        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p>Vadakara, Calicut, Kerala</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>Phone: +91-950-078-0890</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>malibuevents@live.com</p>
          </div>
        </div>
        <div className="banner">
          <div className="item">
            <iframe 
              src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Vadakara&t=h&z=16&ie=UTF8&iwloc=B&output=embed"
              style={{ border: 0, width: "100%", height: "450px",}}
              allowFullScreen=""
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>Contact</h2>
              <div>
                <input type="text" placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)}/>
                <input type="email" placeholder="E-Mail" value={email} onChange={(e)=> setEmail(e.target.value)}/>
              </div>
              <input type="text" placeholder="Subject" value={subject} onChange={(e)=> setSubject(e.target.value)}/>
              <textarea rows={10} placeholder="Message" value={message} onChange={(e)=> setMessage(e.target.value)}/>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact