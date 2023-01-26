import React from 'react'
import "./style.css"
import "./start.css"
import { Link } from 'react-router-dom'

export default function Start() {
  return (
    <div className="mobile-box">
        <div className='outer-box'>
            <div className="box1">
                <p>async</p>
                <h1>tic tac toe</h1>
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-primary" type="button"><Link className="nav-link" to="/login">Login</Link></button>
              <button className="btn btn-warning" type="button"><Link className="nav-link" to="/register">Register</Link></button>
            </div>
        </div>
    </div>
  )
}
