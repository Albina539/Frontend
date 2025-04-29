import React from "react";
import Input from "./UI/Input";

const Form = ({htmlFor, labelText, value, setValue, name, placeholder = ""}) =>{
    return(
        <>
        <label htmlFor={htmlFor}>{labelText}</label>
        <Input
        value={value}
        setValue={setValue}
        name={name}
        placeholder={placeholder}
        />
        </>

    );
};

export default Form;