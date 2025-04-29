import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "./Image";

const Images = () =>{

    const [images, setImages] = useState([]);

    useEffect (() =>{
        getImages();
    }, []);

    const getImages = async() => {
        const resp = await axios.get("https://jsonplaceholder.typicode.com/photos");
        setImages(resp.data);
    };

    return(
        <div>
            {images.map((image) => (
                <Image key={image.id} image={image} />
            ))}
        </div>
    );
};

export default Images;