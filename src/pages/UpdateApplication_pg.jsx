import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import config from "../../appwrite/Config";
import { ApplicationForm } from "../index";

export default function UpdateApplicationPg () {
    
    const [app, setApp] = useState ('')
    const navigate = useNavigate()
    const {slug} = useParams()

    useEffect (() => {
        if (slug) {
            config.GetApplication(slug).then((data) => {
                if (data) {
                    setApp(data)
                }else{
                    navigate('/')
                }
            })
        }else{
            navigate('/')
        }
    }, [slug, navigate])

    return app? (
        <>
         <ApplicationForm AppData={app}/>
        </>
    ): null
}