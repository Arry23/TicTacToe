import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./gamemenu.css"

export default function GameMenu() {
    const [auth,setAuth] = useState(true);

    const navigate = useNavigate();

    const clickhandler = () => {
        if(auth){
            navigate("play");
        }
    };

    return (
        <div className="mobile-box">
            <Link className="nav-link" to="/home">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
            </Link>
            <h5>Start a new game</h5>
            <h2>Whom do you want to play with?</h2>
            <div className="gamemenubox">
                <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Type their email here'/>
                </div>
                </form>
                <div className="d-grid gap-2">
                    <button className="btn btn-warning" type="button" onClick={clickhandler}>Start Game</button>
                </div>
            </div>
        </div>
    )
}
