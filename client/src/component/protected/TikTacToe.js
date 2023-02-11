import React from 'react'
import { Link } from 'react-router-dom'

export default function TikTacToe(props) {
  return (
    <div>
      <Link className="nav-link" to="/home">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
      </Link>
      <h1>Game with {props.p2}</h1>
      <h6>Your Piece</h6>
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="blue" class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
      <div className={`alert alert-${props.res!=="none"?(props.res===props.p1?"success":(props.res===props.p2?"danger":"warning")):"warning"}`} role="alert">
        {props.res!=="none"?(props.res===props.p1?"You Win":(props.res===props.p2?"You lost":"It's a draw!")):(props.turn===props.p1?"Your move":"Their move")}
      </div>
      <div className="board">
        <div class="grid-item" onClick={() => props.clickhandler(1)}>{props.e1}</div>
        <div class="grid-item" onClick={() => props.clickhandler(2)}>{props.e2}</div>
        <div class="grid-item" onClick={() => props.clickhandler(3)}>{props.e3}</div>  
        <div class="grid-item" onClick={() => props.clickhandler(4)}>{props.e4}</div>
        <div class="grid-item" onClick={() => props.clickhandler(5)}>{props.e5}</div>
        <div class="grid-item" onClick={() => props.clickhandler(6)}>{props.e6}</div>  
        <div class="grid-item" onClick={() => props.clickhandler(7)}>{props.e7}</div>
        <div class="grid-item" onClick={() => props.clickhandler(8)}>{props.e8}</div>
        <div class="grid-item" onClick={() => props.clickhandler(9)}>{props.e9}</div>
      </div>
      <div className="d-grid gap-2">
        <button className="btn btn-warning" type="button" onClick={props.submithandler}>Submit</button>
      </div>
    </div>
  )
}
