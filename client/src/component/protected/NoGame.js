import React from 'react'
import { Link } from "react-router-dom";
import "../style.css"
import "./nogame.css"

export default function NoGame() {
  return (
    <div className='mobile-box'>
        <h4>Your Games</h4>
        <div className="gamebox">
          <h1>No Games Found</h1>
          <div className="d-grid gap-2">
            <button className="btn btn-warning" type="button"><Link className="nav-link" to="/home/game">Start a new game</Link></button>
          </div>
        </div>
    </div>
  )
}
