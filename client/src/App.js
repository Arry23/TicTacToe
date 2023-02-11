import './App.css';
import Start from './component/Start';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Register from './component/Register';
import Login from './component/Login';
import Home from "./component/protected/Home"
import React, { useState } from "react";
import ProtectedRoutes from './component/ProtectedRoutes';
import GameMenu from './component/protected/GameMenu';
import Game from './component/protected/Game';
import { UserContext } from './component/context.js'

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [user,setUser] = useState("")
  const [p2,setP2] = useState("")

  return (
      <UserContext.Provider value={{isAuth,setIsAuth,user,setUser,p2,setP2}}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Start/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route exact path="/login" element={<Login /*setIsAuth={setIsAuth} setUser={setUser}*//>}/>
            <Route element={<ProtectedRoutes /*auth={isAuth}*//>}>
              <Route exact path='/home' element={<Home /*user={user} setP2={setP2}*//>} />
              <Route exact path="/home/game" element={<GameMenu /*user={user} setP2={setP2}*//>}/>
              <Route exact path="/home/play" element={<Game key="something_unique" /*p1={user} p2={p2}*//>}/>
            </Route>
          </Routes>
        </Router>
      </UserContext.Provider>
  );
}

export default App;
