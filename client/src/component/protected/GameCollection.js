import React,{ useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import "../style.css"
import "./gamecollection.css"
import GameCard from './GameCard'
import { UserContext } from '../context.js'

export default function GameCollection() {
  const user = useContext(UserContext)
  const [game,setGame] = useState([])
  useEffect(() =>{
    const func = async () =>{
      let data = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/player`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({player: user.user})
      });
      data=await data.json()
      setGame(data.game);
    }
    func()
  },[user.user])
  

  return (
    <>
    <div className='mobile-box '>
      <div className="modal1">
        <h2>Your Games</h2>
        <div>
          {game.map((ele) =>{
              if(ele.player1===user.user)
                return <div key={ele._id}><GameCard p2={ele.player2} turn={ele.turn} result={ele.result} user={ele.player1} date={ele.time}/></div>
              else
                return <div key={ele._id}><GameCard p2={ele.player1} turn={ele.turn} result={ele.result} user={ele.player2} date={ele.time}/></div>

          })}
        </div>
      </div>
      <div className="modal2">
        <Link className="nav-link" to="/home/game">
          <button type="button" class="btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg> New Game
          </button>
        </Link>
      </div>
    </div>
    </>
  )
}
