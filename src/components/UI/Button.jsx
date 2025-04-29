import React from "react";

const Button = ({onClick, type="button"}) =>{
    return(
        <button type={type} onClick={onClick}>Добавить пост</button>
    );
};

export default Button;