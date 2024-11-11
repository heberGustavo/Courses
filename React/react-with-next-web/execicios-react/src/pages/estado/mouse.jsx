/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

const styleCustom = {
    backgroundColor: "#222",
    color: "#fff",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
};

const styleFont = {
    fontSize: "40px",
}

export default function mouse(){
    const [positionX, setPositionX] = useState(0);
    const [positionY, setPositionY] = useState(0);

    function onMoveInScreen(e){
        setPositionX(e.clientX);
        setPositionY(e.clientY);
    }

    return(
        <div style={styleCustom} onMouseMove={onMoveInScreen}>
            <h3 style={styleFont}>Eixo: {positionX}</h3>
            <h3 style={styleFont}>Eixo: {positionY}</h3>
        </div>
    );
}