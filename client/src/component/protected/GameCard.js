import React,{ useContext } from 'react'
import { Link } from 'react-router-dom'
import "./gamecard.css"
import { UserContext } from '../context.js'

export default function GameCard(props) {

  const user = useContext(UserContext)
  const res = (<p className='card-text'>{props.result===props.user?"You won!":(props.result===props.p2?"You lost!":"It's a Draw!")}</p>)
  const p1 = (<p className='card-text'>{props.p2} have made their move!<br/>It's your turn to play now.</p>)
  const p2 = (<p className='card-text'>You have made your move!<br/>Waiting for them.</p>)
  
  const live = (<div>{props.turn===props.user?p1:p2}</div>)

  const handleclick = () =>{
    user.setP2(props.p2)
  }

  return (
    <>
    <div class="card shadow">
        <div class="card-body">
          <h4 class="card-title">Game with {props.p2}</h4>
          <div  className='text-wrap'>
            {props.result!=="none"?res:live}
          </div>
          <div className="date">
            {props.date}
          </div>
          <Link to="/home/play">
          <div className="d-grid gap-2">
            <button className="btn btn-warning" onClick={handleclick} type="button"> View Game</button>
          </div>
          </Link>
        </div>
    </div>
    </>
  )
}
