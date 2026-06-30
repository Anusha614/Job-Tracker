import React, { useState,useEffect } from "react";
import {useForm} from 'react-hook-form'
import {Input, Button} from '../../index'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import config from "../../../appwrite/Config";

export default function ApplicationForm ({AppData = null}) {

    const {register, handleSubmit, setValue} = useForm()
    const [error, setError] = useState('')
    const userData = useSelector((state) => (state.auth.userData))
    const navigate = useNavigate()

    useEffect(() => {
    if (AppData) {
        setValue("company", AppData.company);
        setValue("role", AppData.role);
        setValue("status", AppData.status);
    }
}, [AppData, setValue]);

    const onSubmit = async(data) => {
        try {
            let result;

            if (AppData) {
                result = await config.UpdateApplications(AppData.$id,{
                    company: data.company,
                    role: data.role,
                    status: data.status
                })
            } else {
            console.log("DATA BEING SENT:", data);
                result = await config.CreateApplication({
                company: data.company,
                role: data.role,
                status: data.status,
                userID: userData.$id
        }) }

            if (result) {
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

            <button type = "submit">{AppData ? "Update Application" : "Create Application"}</button>

        </form>
    )
}