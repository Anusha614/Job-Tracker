import { useState,useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import {Header, Footer} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/Auth'
import { login,logout } from '../store/AuthSlice'


function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch();

useEffect(() => {
  authService.GetCurrentUser()
    .then((userData) => {
      console.log("APP USER:", userData);
      if (userData) {
        dispatch(login({userData}));
      }else{

        dispatch(logout())
      }
    
    })
    .catch((error) => console.log("No active session found"));
}, []);

  return (
    <>
    <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
