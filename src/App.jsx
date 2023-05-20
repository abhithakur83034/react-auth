import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import  'react-toastify/dist/ReactToastify.css';
import Login from "./components/Login";
import Register from "./components/Register";
import { ToastContainer } from "react-toastify";
import User from "./components/User";

export default function App(){
    return(
        <>
        <ToastContainer/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="register" element={<Register/>} />
                <Route path="user" element={<User/>} />
            </Routes>
        </BrowserRouter>          
        </>
    )
}