import React, { useState, useEffect, useContext } from 'react'
import "./game.css"
import { UserContext } from '../context.js'
import TikTacToe from './TikTacToe'

export default function Game() {
  const user = useContext(UserContext)
  const cross = (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="blue" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>);
  const zero = (<svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" fill="red" class="bi bi-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              </svg>);
  
  let p1=user.user;
  let p2=user.p2;
  const [grid,setGrid] = useState()
  const [e1,setE1] = useState();
  const [e2,setE2] = useState();
  const [e3,setE3] = useState();
  const [e4,setE4] = useState();
  const [e5,setE5] = useState();
  const [e6,setE6] = useState();
  const [e7,setE7] = useState();
  const [e8,setE8] = useState();
  const [e9,setE9] = useState();
  const [prev,setPrev] = useState(0);
  const [res,setRes] = useState();
  const [turn,setTurn] =useState()

  useEffect(() =>{
    fetch(`${process.env.REACT_APP_SERVER_URL}/users/getgame`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        p1: p1,
        p2: p2
      })
    }).then((res)=>{
      return res.json()
    }).then((data)=>{
      return data.game
    }).then((data)=>{
      setGrid(data.game)
      setRes(data.result)
      let arr=data.game
      setE1(arr[0][0]===p1?cross:(arr[0][0]===p2?zero:""));
      setE2(arr[0][1]===p1?cross:(arr[0][1]===p2?zero:""));
      setE3(arr[0][2]===p1?cross:(arr[0][2]===p2?zero:""));
      setE4(arr[1][0]===p1?cross:(arr[1][0]===p2?zero:""));
      setE5(arr[1][1]===p1?cross:(arr[1][1]===p2?zero:""));
      setE6(arr[1][2]===p1?cross:(arr[1][2]===p2?zero:""));
      setE7(arr[2][0]===p1?cross:(arr[2][0]===p2?zero:""));
      setE8(arr[2][1]===p1?cross:(arr[2][1]===p2?zero:""));
      setE9(arr[2][2]===p1?cross:(arr[2][2]===p2?zero:""));
      setTurn(data.turn)
    })
    // eslint-disable-next-line
  },[])  
  
  const clickhandler = (num) => {
    let i=(num-1-(num-1)%3)/3
    let j=(num-1)%3
    if(grid[i][j]===p1 || grid[i][j]===p2 || num===prev || turn===p2 || res!=="none") return;
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
    if(turn===p2 && res!=="none") return
    let result="none"
    if(grid[0][0]!==""){
      if(grid[0][0]===grid[0][1] && grid[0][1]===grid[0][2]) result=grid[0][0]
      else if(grid[0][0]===grid[1][0] && grid[1][0]===grid[2][0]) result=grid[0][0]
      else if(grid[0][0]===grid[1][1] && grid[1][1]===grid[2][2]) result=grid[0][0]
    }
    if(grid[0][1]!==""){
      if(grid[0][1]===grid[1][1] && grid[1][1]===grid[2][1]) result=grid[0][1]
    }
    if(grid[0][2]!==""){
      if(grid[0][2]===grid[1][2] && grid[1][2]===grid[2][2]) result=grid[0][2]
      else if(grid[0][2]===grid[1][1] && grid[1][1]===grid[2][0]) result=grid[0][2]
    }
    if(grid[1][0]!==""){
      if(grid[1][0]===grid[1][1] && grid[1][1]===grid[1][2]) result=grid[1][0]
    }
    if(grid[2][0]!==""){
      if(grid[2][0]===grid[2][1] && grid[2][1]===grid[2][2]) result=grid[2][0]
    }
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
    setPrev(0)
    setTurn(p2)
    setRes(result)
    fetch(`${process.env.REACT_APP_SERVER_URL}/users/update`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        p1: p1,
        p2: p2,
        turn: p2,
        result: result,
        grid: grid,
        time: datestr
      }),
    });
  }
  
  return (
    <div className='mobile-box'>
      <TikTacToe p1={p1} p2={p2} res={res} turn={turn} e1={e1} e2={e2} e3={e3} e4={e4} e5={e5} e6={e6} e7={e7} e8={e8} e9={e9} clickhandler={clickhandler} submithandler={submithandler}/>
    </div>
  )
}
