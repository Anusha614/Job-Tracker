import React from "react";
import authService from "../../../appwrite/Auth";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/AuthSlice";

export default function LogoutBtn () {

    const dispatch = useDispatch()

    const logoutHandler = () => {
         authService.Logout().then(() => {
            (dispatch(logout()))
         })
    }

    return (
        <button onClick={logoutHandler}>
            Logout
        </button>
    )
}

