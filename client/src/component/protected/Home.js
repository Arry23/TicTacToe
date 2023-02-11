import React,{ useState, useEffect, useContext } from 'react'
import "../style.css"
import GameCollection from './GameCollection'
import NoGame from './NoGame'
import { UserContext } from '../context.js'

export default function Home() {
    const user = useContext(UserContext)
    const [show,setShow] = useState(true);
    const player=user.user
    useEffect(() =>{
        const func = async () =>{
            let data = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/player`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({player: player})
            });
            data=await data.json()
            if(data.game.length) setShow(false)
        }
        func()
    },[player])
    
    return (
        (show ? <NoGame/> : <GameCollection/>)
    )
}
