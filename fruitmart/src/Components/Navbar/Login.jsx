import React, { useState } from "react";

const Login = ({onClose}) => {
  const[email, setEmail] = useState();
  const[password, setPassword] =useState();

  const handlesubmit = (e) => {
    e.preventDefault();
   localStorage.setItem("email", email);
   localStorage.setItem("password", password);
   onClose();
  }
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form onSubmit={handlesubmit}>
          <h1>Login</h1>
          <input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
          <br />
          <br />
          <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
