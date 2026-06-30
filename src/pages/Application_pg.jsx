import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import config from "../../appwrite/Config";


export default function ApplicationPg() {
    const [app, setApp] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            config.GetApplication(slug).then((data) => {
                if (data) setApp(data);
                else navigate('/');
            });
        }
    }, [slug, navigate]);

    return app ? (
        <div className="py-8">
       
                <div className="card w-full bg-base-100 shadow-xl border p-6">
                    <h1 className="text-3xl font-bold">{app.company}</h1>
                    <p className="text-xl text-gray-600 mt-2">Role: {app.role}</p>
                    <div className="mt-4">
                        <span className="badge badge-lg">{app.status}</span>
                    </div>
                    <div className="mt-6 text-sm text-gray-400">
                        <p>Application ID: {app.$id}</p>
                        <p>Applied on: {new Date(app.$createdAt).toLocaleDateString()}</p>
                    </div>
                </div>
       
        </div>
    ) : null;
}