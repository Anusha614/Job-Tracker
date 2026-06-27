import React from "react";
import {useForm} from 'react-hook-form'
import {Input, Button} from '../../index'


export default function () {

    const {register, handleSubmit} = useForm()

    const onSubmit = () => {
        alert('You successfully created a Application')
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <Input/>
        </form>
    )
}