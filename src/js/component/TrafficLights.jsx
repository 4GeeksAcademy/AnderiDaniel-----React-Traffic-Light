import React, { useState } from "react";
import "../../styles/index.css";

function TrafficLights() {

    const [activeColor, setActiveColor] = useState("red");

    const clickRed = () => {
        setActiveColor("red");
    };

    const clickYellow = () => {
        setActiveColor("yellow");
    };

    const clickGreen = () => {
        setActiveColor("green");
    };

    return (
        <div className="box">
            <div className="lightBox">
                <button
                    className={"traffic-light-button red " + (activeColor === "red" ? "active" : "")}
                    onClick={clickRed}
                >

                </button>
                <button
                    className={"traffic-light-button yellow " + (activeColor === "yellow" ? "active" : "")}
                    onClick={clickYellow}
                >
                </button>
                <button
                    className={"traffic-light-button green " + (activeColor === "green" ? "active" : "")}
                    onClick={clickGreen}
                >
                </button>
            </div>
        </div>
    );
}

export default TrafficLights;
