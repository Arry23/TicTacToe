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

function App() {
  const [isAuth, setIsAuth] = useState(false);
  let a1="nbdfsjvj";

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Start/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/login" element={<Login isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
          <Route element={<ProtectedRoutes auth={isAuth}/>}>
            <Route exact path='/home' element={<Home />} />
            <Route exact path="/home/game" element={<GameMenu/>}/>
            <Route exact path="/home/game/play" element={<Game/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
