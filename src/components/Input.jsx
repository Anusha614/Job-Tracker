import React from "react";

const Input = React.forwardRef(function Input ({ label, placeholder ='', className = '', ...props}, ref) {

    return (
        <div className="w-full mb-4">
            {label && <label className="block mb-1">{label}</label>}
            <input
                
                placeholder={placeholder}
                ref = {ref}
                className={`w-full px-3 py-2 border rounded-lg ${className}`}
                {...props}
            />
        </div>
    );

})

export default Input