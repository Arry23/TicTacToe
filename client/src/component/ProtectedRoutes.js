import React, { useContext } from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from './context.js'

const ProtectedRoutes = () => {  
    const user = useContext(UserContext)    
    return (user.isAuth === true ? <Outlet /> : <Navigate to="/login" replace/>)
}
export default ProtectedRoutes;