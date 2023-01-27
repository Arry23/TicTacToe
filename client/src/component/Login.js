import React, { useState } from 'react'
import "./login.css"
import "./style.css"
import { Link } from 'react-router-dom'

export default function Login(props) {
  const [loginu, setLoginu] = useState("");
  const [loginp, setLoginp] = useState("");

  const loginhandler = async () => {
    let x = {
      username: loginu,
      password: loginp,
    };

    const data = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(x),
    });
    const jsondata = await data.json();
    // console.log(jsondata.status);

    if (jsondata.status) {
      props.setIsAuth(true);
    }
    else{
      alert("Invalid username or password");
    }
  }

  return (
    <div className='mobile-box'>
      <Link className="nav-link" to="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
      </Link>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Login</label>
        <h1 for="exampleInputEmail1" className="form-label">Please enter your details</h1>
      </div>
      <div className="mb-3">
      </div>
      <div className="loginbox">
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Username</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setLoginu(e.target.value)} placeholder='Type your username here'/>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setLoginp(e.target.value)} placeholder='Type your username here'/>
          </div>
        </form>
      </div>
      <div className="d-grid gap-2">
        <button className="btn btn-warning" type="button" onClick={loginhandler}><Link className="nav-link" to="/home">Login</Link></button>
      </div>
    </div>
  )
}
