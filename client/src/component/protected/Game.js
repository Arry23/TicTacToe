import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./game.css"

export default function Game() {
  const cross = (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="blue" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>);
  const zero = (<svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" fill="red" class="bi bi-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              </svg>);
  let p1="p1"
  let p2="p2"
  let grid = [["","",p2],["","",p2],["",p1,""]]

  const [e1,setE1] = useState(grid[0][0]===p1?cross:(grid[0][0]===p2?zero:""));
  const [e2,setE2] = useState(grid[0][1]===p1?cross:(grid[0][1]===p2?zero:""));
  const [e3,setE3] = useState(grid[0][2]===p1?cross:(grid[0][2]===p2?zero:""));
  const [e4,setE4] = useState(grid[1][0]===p1?cross:(grid[1][0]===p2?zero:""));
  const [e5,setE5] = useState(grid[1][1]===p1?cross:(grid[1][1]===p2?zero:""));
  const [e6,setE6] = useState(grid[1][2]===p1?cross:(grid[1][2]===p2?zero:""));
  const [e7,setE7] = useState(grid[2][0]===p1?cross:(grid[2][0]===p2?zero:""));
  const [e8,setE8] = useState(grid[2][1]===p1?cross:(grid[2][1]===p2?zero:""));
  const [e9,setE9] = useState(grid[2][2]===p1?cross:(grid[2][2]===p2?zero:""));
  
  const [prev,setPrev] = useState(0);
  const clickhandler = (num) => {
    let i=(num-1-(num-1)%3)/3
    let j=(num-1)%3
    if(grid[i][j]===p1 || grid[i][j]===p2) return;
    grid[i][j]=p1
    if(num===1) setE1(cross);
    else if(num===2) setE2(cross);
    else if(num===3) setE3(cross);
    else if(num===4) setE4(cross);
    else if(num===5) setE5(cross);
    else if(num===6) setE6(cross);
    else if(num===7) setE7(cross);
    else if(num===8) setE8(cross);
    else if(num===9) setE9(cross);
    i=(prev-1-(prev-1)%3)/3
    j=(prev-1)%3
    grid[i][j]=""
    console.log(grid);
    if(prev===1) setE1("");
    else if(prev===2) setE2("");
    else if(prev===3) setE3("");
    else if(prev===4) setE4("");
    else if(prev===5) setE5("");
    else if(prev===6) setE6("");
    else if(prev===7) setE7("");
    else if(prev===8) setE8("");
    else if(prev===9) setE9("");
    setPrev(num);
  }

  const submithandler = () => {

  }

  return (
    <div className='mobile-box'>
      <Link className="nav-link" to="/game">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
      </Link>
      <h1>Game with harsh</h1>
      <h6>Your Piece</h6>
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="blue" class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="red" class="bi bi-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      </svg>
      <div class="alert alert-warning" role="alert">
        This is a warning alert—check it out!
      </div>
      <div className="board">
        <div class="grid-item" onClick={() => clickhandler(1)}>{e1}</div>
        <div class="grid-item" onClick={() => clickhandler(2)}>{e2}</div>
        <div class="grid-item" onClick={() => clickhandler(3)}>{e3}</div>  
        <div class="grid-item" onClick={() => clickhandler(4)}>{e4}</div>
        <div class="grid-item" onClick={() => clickhandler(5)}>{e5}</div>
        <div class="grid-item" onClick={() => clickhandler(6)}>{e6}</div>  
        <div class="grid-item" onClick={() => clickhandler(7)}>{e7}</div>
        <div class="grid-item" onClick={() => clickhandler(8)}>{e8}</div>
        <div class="grid-item" onClick={() => clickhandler(9)}>{e9}</div>
      </div>
      <div className="d-grid gap-2">
        <button className="btn btn-warning" type="button" onClick={submithandler}>Submit</button>
      </div>
    </div>
  )
}
