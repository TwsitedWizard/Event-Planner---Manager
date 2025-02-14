import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast'

const Edit = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post("http://localhost:4000/api/v1/message/update", 
        { email, subject, message }, 
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );
      toast.success(res.data.message);
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };
  
  return (
    <>
      <div className="contact container">
        
        <div className="banner">
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>Edit Your Proposal</h2>
              <div>
                <input type="email" placeholder="E-Mail" value={email} onChange={(e)=> setEmail(e.target.value)}/>
              </div>
              <input type="text" placeholder="Subject" value={subject} onChange={(e)=> setSubject(e.target.value)}/>
              <textarea rows={10} placeholder="Message" value={message} onChange={(e)=> setMessage(e.target.value)}/>
              <button type="submit">Edit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Edit