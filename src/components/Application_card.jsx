import React from "react";
import { Link } from "react-router-dom";


export default function ApplicationCard({$id, company, role, status, dateApplied}) {

    const getBadgeColor = (status) => {
        switch (status.toLowerCase()) {
            case 'applied': return 'badge-info';
            case 'interview': return 'badge-warning';
            case 'offered': return 'badge-success';
            case 'rejected': return 'badge-error';
              default: return 'badge-ghost';
        }}

    return (
        <div className="card w-full bg-base-100 shadow-md border border-base-200">
            <div className="card-body">
               
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="card-title text-xl font-bold">{company}</h2>
                        <p className="text-sm text-gray-500">{role}</p>
                    </div>
                    <span className={`badge ${getBadgeColor(status)}`}>{status}</span>
                </div>

                
                <div className="my-4">
                    <p className="text-sm font-medium">{dateApplied}</p>
                </div>

               
                <div className="card-actions justify-end mt-2">
                    <button className="btn btn-sm btn-outline">Edit</button>
                    <button className="btn btn-sm btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
}