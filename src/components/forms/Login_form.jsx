import React from "react";
import {useForm} from 'react-hook-form'
import {Input, Button} from '../../index'


export default function LoginForm () {

    const {register, handleSubmit} = useForm()

     const onSubmit = (data) => {
        alert('You successfully logged in!')
    };

    return (

        <form onSubmit = {handleSubmit(onSubmit)}>
            <label htmlFor="Login">Login</label>
            <Input
            {...register("username", {required: true})}
            placeholder = 'Enter Username'/>
            <Input 
            {...register('password', {required: true})}
            placeholder = 'Enter your password'/>
            <Button type = "submit"> Login </Button>
        </form>
    )
}