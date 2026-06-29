import React, { useState } from "react";
import {useForm} from 'react-hook-form'
import {Input, Button} from '../../index'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import config from "../../../appwrite/Config";

export default function ApplicationForm () {

    const {register, handleSubmit} = useForm()
    const [error, setError] = useState('')
    const userData = useSelector((state) => (state.auth.userData))
    const navigate = useNavigate()

    const onSubmit = async(data) => {
        try {
            console.log("DATA BEING SENT:", data);
           const AppData = await config.CreateApplication({
                company: data.company,
                role: data.role,
                status: data.status,
                userID: userData.$id
        }) 

            if (AppData) {
                navigate('/all-applications')
            } 
        } catch (error) {
            setError (error.message)
            
        }
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
            {...register("company" ,{required:true})}
            placeholder = "Company Name"/>
            <Input
            {...register("role",{required:false})}
            placeholder="Role"/>
            <select {...register("status")}>
                <option value="Applied">Applied</option>
                <option value="Interview">Interview</option>
            </select>

            <button type = "submit">Create</button>

        </form>
    )
}