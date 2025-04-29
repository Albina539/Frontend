import React from "react";

const Input = ({value, setValue, placeholder, name=""}) =>{
    return(
    <input 
    value={value}
    onChange={(e) => setValue(e.target.value)}
    placeholder = {placeholder}
    name={name}/>
    );
};

export default Input;