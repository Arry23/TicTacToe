import React, { useState } from 'react'
import "./register.css"
import "./style.css"
import { Link } from 'react-router-dom'

export default function Register() {
  const [createu, setCreateu] = useState("");
  const [createn, setCreaten] = useState("");
  const [createe, setCreatee] = useState("");
  const [createp, setCreatep] = useState("");

  const createacchandler = async() => {
    let x = {
      username:createu,
      email:createe,
      name:createn,
      password:createp
    }

    const data = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/register`,{
      method:"POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(x)
    });
    const jsondata = await data.json();
    if(jsondata.status){
      alert("Your account have succefully created!!!");
    }
    else{ 
      alert("This username or email has been already taken, try another one.");
    }
  };
  return (
    <div className='mobile-box'>
      <Link className="nav-link" to="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
      </Link>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Create account</label>
        <h1 for="exampleInputEmail1" className="form-label">Let's get to know you better!</h1>
      </div>
      <div className="mb-3">
      </div>
      <div className="registerbox">
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Your Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e) => setCreaten(e.target.value)} aria-describedby="emailHelp" placeholder='Type your name here'/>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Username</label>
            <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e) => setCreateu(e.target.value)} aria-describedby="emailHelp" placeholder='Type your username here'/>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" onChange={(e) => setCreatee(e.target.value)} aria-describedby="emailHelp" placeholder='Type your email here'/>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputEmail1" onChange={(e) => setCreatep(e.target.value)} aria-describedby="emailHelp" placeholder='Type your username here'/>
          </div>
        </form>
      </div>
      <div className="d-grid gap-2">
        <button className="btn btn-warning" type="button" onClick={createacchandler}>Register</button>
      </div>
    </div>
  )
}
