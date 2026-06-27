import React, {useState} from "react";
import {useForm} from 'react-hook-form'
import {Input, Button} from '../../index'
import authService from "../../../appwrite/Auth";
import { useDispatch} from "react-redux";
import { useNavigate, Link } from "react-router-dom";

export default function LoginForm () {

    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const dispatch = useDispatch()

     const handleLogin = async (userData) => {
        setError('')
        try{

            const session = await authService.Login(userData)

            if (session) {
                const currentUser = await authService.GetCurrentUser()

                if (currentUser) {
                    dispatch(login(currentUser))
                    {/*navigate('/')*/}
                     alert('You successfully logged in!')
                }
            }
        } catch (error) {
            setError(error.message)
            alert(error)
        }
        
    };

    return (

        <form onSubmit = {handleSubmit(handleLogin)}>
            <Input
            {...register("email", {required: true})}
            placeholder = 'Enter email'/>
            <Input 
            {...register('password', {required: true})}
            placeholder = 'Enter your password'/>
            <Button type = "submit"> Login </Button>
        </form>
    )
}