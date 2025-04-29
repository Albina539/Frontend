import React, { useState } from "react";

const Creatings = () => {
    const[text, setText] = useState("");
    const[outputText, setOutputText] = useState("");

    const click = () => {
        setOutputText(text);
    };

    return(
        <div className="main">
            <button onClick={click}>
                Click
            </button>
            <input value={text} onChange={(event) => setText(event.target.value)} />
            {outputText && <p id ="txt">text: {text}</p>}
        </div>
        
    );
};


export default Creatings;