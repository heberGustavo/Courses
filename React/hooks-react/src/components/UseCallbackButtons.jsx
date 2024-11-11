import React from "react";

const UseCallbackButtons = (props) => {
    console.log("render...");

    return (
        <div>
            <button className="btn" onClick={() => props.sum(6)}>+6</button>
            <button className="btn" onClick={() => props.sum(12)}>+12</button>
            <button className="btn" onClick={() => props.sum(18)}>+18</button>
        </div>
    );
}

export default React.memo(UseCallbackButtons)
