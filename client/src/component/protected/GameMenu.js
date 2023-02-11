import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./gamemenu.css"
import { UserContext } from '../context.js'

export default function GameMenu() {
    
    const user = useContext(UserContext)
    const [email,setEmail] = useState("");
    const navigate = useNavigate();

    const clickhandler = async () => {
        let name = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/getname`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: email
            }),
        });
        name=await name.json();
        if(name.name === undefined){
            alert("Enter valid email!!!");
        }
        else{
            user.setP2(name.name)
            let game = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/getgame`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  p1: user.user,
                  p2: name.name
                })
            });
            game = await game.json().game
            if(game !== undefined){
                alert("Your ganme is already running with "+name.name);
            }
            else{
                const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                const date=new Date();
                let day = date.getDate()+(date.getDate()%10===1?"st":(date.getDate()%10===2?"nd":(date.getDate()%10===3?"rd":"th")))
                let month = months[date.getMonth()]
                let year = date.getFullYear()
                let hour = date.getHours();
                let min = date.getMinutes();
                let noon = "am";
                if(hour >= 12)
                    noon = "pm"
                hour %= 12;
                if(hour === 0) 
                    hour = 12;
                let datestr = day+" "+month+" "+year+", "+hour+":"+min+noon
                await fetch(`${process.env.REACT_APP_SERVER_URL}/users/game`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      p1: user.user,
                      p2: name.name,
                      turn: user.user,
                      time:datestr
                    })
                });
                navigate("/home/play");
            }
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
                    <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" placeholder='Type their email here'/>
                </div>
                </form>
                <div className="d-grid gap-2">
                    <button className="btn btn-warning" type="button" onClick={clickhandler}>Start Game</button>
                </div>
            </div>
        </div>
    )
}
