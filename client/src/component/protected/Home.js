import React,{ useState } from 'react'
import "../style.css"
import GameCollection from './GameCollection'
import NoGame from './NoGame'

export default function Home() {
    const [show,setShow] = useState(true);
    return (
        (show ? <NoGame/> : <GameCollection/>)
    )
}
