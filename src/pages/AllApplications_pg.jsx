import React, {useEffect, useState} from "react";
import {ApplicationCard} from '../index'
import config from '../../appwrite/Config'
import { useSelector } from "react-redux";

export default function AllApplicationPg () {

    const [applications, setApplications] = useState([])
    const userData = useSelector((state) => state.auth.userData);
    const userId = userData?.$id;
console.log("Redux user:", userData);



    useEffect (() => { 
        if (userId){
            
        config.ListApplications(userId).then((response) => {
            if (response && response.documents) {
                setApplications(response.documents)
            } else {
                setApplications([])
            }
        })}
    },[userId])
    return (
        <><div className="flex flex-wrap p-4 gap-4">
                {applications && applications.map((application) => (
                    <div key={application.$id}>
                         <ApplicationCard {...application}/>
                    </div>
                                
                         ))}
            </div></>
    )
}