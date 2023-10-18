import React, { useState } from "react";


export const TrafficLight = () => {

    const [color, setColor] = useState("");
    const [show, steShow] = useState(false);

    return (
        <div className="container">
            <div className="box">
                <div className={`light light-red ${color === 'red' ? 'glow-red' : ''}`} onClick={() => setColor("red")}></div>
                <div className={`light light-yellow ${color === 'yellow' ? 'glow-yellow' : ''}`} onClick={() => setColor("yellow")}></div>
                <div className={`light light-green ${color === 'green' ? 'glow-green' : ''}`} onClick={() => setColor("green")}></div>
            {show && (<div className={`light light-purple ${color === 'purple' ? 'glow-purple' : ''}`} onClick={() => setColor("purple")}></div>)}
            </div>
            <button onClick={() => steShow(!show)} className="btn">{show ? "HIDE NEW COLOR" : "SHOW NEW COLOR"}</button>
        </div>
    )
};