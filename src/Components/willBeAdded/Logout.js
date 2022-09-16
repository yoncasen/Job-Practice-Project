import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../redux/authSlice";
import "./Logout.css"

const Logout = () =>{

    const dispatch = useDispatch()
    const username = useSelector(selectUser)

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout)
    }

    return (
    <div>
        <h1>
            Welcome {username}!
        </h1>
        <button 
            className="logout_button"
            onClick={(e) => handleLogout(e)}
        >
            Log out
        </button>
    </div>
    )
}

export default Logout;