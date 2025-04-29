import React from "react";

const Image = ({image}) =>{
    return(
        <div>
            <h2>{image.title}</h2>
            <img src={image.url} alt={image.title}/>
        </div>
    );
};

export default Image;