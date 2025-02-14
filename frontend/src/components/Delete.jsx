import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast'

const Delete = () => {
  const [email, setEmail] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post("http://localhost:4000/api/v1/message/delete", 
        { email }, 
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );
      toast.success(res.data.message);
      setEmail("");
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
              <h2>Delete Your Proposal</h2>
              <div>
                <input type="email" placeholder="E-Mail" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <button type="submit">Delete Proposal</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Delete