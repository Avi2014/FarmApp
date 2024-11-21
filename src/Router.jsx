import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Customer from "./roles/customers/pages/Customer";

import { Routes, Route, Navigate, RouterProvider } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import CropInfo from './roles/farmers/pages/CropInfo'
import History from './roles/farmers/pages/History'
import Messagesf from './roles/farmers/pages/Messagesf'
import Profilef from './roles/farmers/pages/Profilef'
import Searchf from './roles/farmers/pages/Searchf'
import Weather from './roles/farmers/pages/Weather'

import Explore from './roles/customers/pages/Explore'
import Home from './roles/customers/pages/Home'
import Messagesc from './roles/customers/pages/Messagesc'
import Profilec from './roles/customers/pages/Profilec'
import Searchc from './roles/customers/pages/Searchc'
import Transactions from './roles/customers/pages/Transactions'


const Router = () => {

  const [user, setUser] = useState(null);
  const [registerErrors, setRegisterErrors] = useState(null);
  const [registerMessage, setRegisterMessage] = useState(null);
  console.log(user)

  const getUser = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await axios.post("https://angkor-backend.onrender.com/login", `email=${email}&password=${password}`)
    .then(res => res.data)
    .then(data => {
        const { user } = data
        setUser(user)
    })

  }

  const registerUser = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmpassword = e.target.confirmpassword.value;
    const name = e.target.name.value;
    const role = e.target.role.value;
    const username = e.target.username.value;
    console.log(email, password, confirmpassword, name, role, username)
    await axios.post("https://angkor-backend.onrender.com/register", `email=${email}&password=${password}&confirmpassword=${confirmpassword}&name=${name}&role=${role}&username=${username}`)
    .then(res => res.data)
    .then(data => {
      const {errors} = data;
      const {message} = data;
      if(errors){
        setRegisterErrors(errors)
      }
      if(message){
        setRegisterMessage(message)
      }
    })
    .catch(() => setRegisterErrors([{message: "Server error"}]))
  }
  return(

      <div>
        <Routes>

            <Route path="/" element={<HomePage />} />

            <Route path="/login" element={user ? <Navigate to={`/${user.role}`} />: <Login handleClick={getUser}/>}/>
            <Route path="/register" element={user ? <Navigate to="/" /> : <Register registerUser={registerUser} errors={registerErrors} message={registerMessage}/>}/>

            <Route path="/farmer" element={user ? (user.role == "farmer" ? <Profilef /> : <Navigate to="/login" />): <Navigate to="/login" />} />
            <Route path="/farmer/cropInfo" element={user ? (user.role == "farmer" ? <CropInfo /> : <Navigate to="/login" />): <Navigate to="/login" />} />
            <Route path="/farmer/profile" element={user ? (user.role == "farmer" ? <Profilef /> : <Navigate to="/login" />): <Navigate to="/login" />} />
            <Route path="/farmer/weather" element={user ? (user.role == "farmer" ? <Weather /> : <Navigate to="/login" />): <Navigate to="/login" />} />
            <Route path="/farmer/history" element={user ? (user.role == "farmer" ? <History /> : <Navigate to="/login" />): <Navigate to="/login" />} />
            <Route path="/farmer/messages" element={user ? (user.role == "farmer" ? <Messagesf /> : <Navigate to="/login" />): <Navigate to="/login" />} />
            <Route path="/farmer/search" element={user ? (user.role == "farmer" ? <Searchf /> : <Navigate to="/login" />): <Navigate to="/login" />} />

            <Route path="/customer" element={user ? (user.role == "customer" ? <Customer /> : <Navigate to="/login" />): <Navigate to="/login" />} />
            <Route path="/customer/home" element={user ? (user.role == "customer" ? <Home /> : <Navigate to="/login" />): <Navigate to="/login" />} />
            <Route path="/customer/profile" element={user ? (user.role == "customer" ? <Profilec /> : <Navigate to="/login" />): <Navigate to="/login" />} />
            <Route path="/customer/explore" element={user ? (user.role == "customer" ? <Explore /> : <Navigate to="/login" />): <Navigate to="/login" />} />
            <Route path="/customer/transactions" element={user ? (user.role == "customer" ? <Transactions /> : <Navigate to="/login" />): <Navigate to="/login" />} />
            <Route path="/customer/messages" element={user ? (user.role == "customer" ? <Messagesc /> : <Navigate to="/login" />): <Navigate to="/login" />} />
            <Route path="/customer/search" element={user ? (user.role == "customer" ? <Searchc /> : <Navigate to="/login" />): <Navigate to="/login" />} />

        </Routes>
      </div>
  )
}

export default Router;