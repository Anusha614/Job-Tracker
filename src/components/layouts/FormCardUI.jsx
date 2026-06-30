import React from "react";

export default function FormCardUI({ title, children }) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-950 p-4">
            <div className="w-full max-w-lg bg-slate-900 p-10 rounded-3xl shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <h2 className="text-3xl font-bold text-orange-100 mb-8 tracking-tight">
                    {title}
                </h2>
                
                {children}
            </div>
        </div>
    );
}