import React from "react";

const Input = ({inputClass = ""}) => {
    return (
        <input
            className={`input-custom w-full border-2 rounded-full px-2 bg-white text-black ${inputClass}`}
            title="Hello"
            placeholder="Search"
        />
    )
};

export default Input