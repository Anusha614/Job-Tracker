import React from "react";


export default function AuthCardUI({ title, children }) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-950 p-4">
            <div className="card w-full max-w-sm bg-base-100 shadow-xl border border-slate-800 p-8">
                <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
                {children}
            </div>
        </div>
    );
}