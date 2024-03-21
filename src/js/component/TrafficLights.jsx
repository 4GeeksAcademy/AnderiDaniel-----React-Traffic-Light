import React, { useState, useEffect } from "react";
import "../../styles/index.css";

function TrafficLights() {
    const [activeColor, setActiveColor] = useState("red");
    const [isCycleActive, setIsCycleActive] = useState(false);
    const [isGreenPurple, setIsGreenPurple] = useState(false);

    const clickRed = () => {
        setActiveColor("red");
        setIsCycleActive(false); 
    };

    const clickYellow = () => {
        setActiveColor("yellow");
        setIsCycleActive(false); 
    };

    const clickGreen = () => {
        setActiveColor("green");
        setIsCycleActive(false); 
    };

    const startCycle = () => {
        if (isCycleActive) {
            setIsCycleActive(false); 
        } else {
            setIsCycleActive(true); 
        }
    };

    const changeLight = () => {
        setIsGreenPurple(prevState => !prevState); 
    };

    useEffect(() => {
        let intervalId

        if (isCycleActive) {
         intervalId = setInterval(() => {

                switch (activeColor) {
                    case "red":
                        setActiveColor("yellow");
                        break;
                    case "yellow":
                        setActiveColor("green");
                        break;
                    case "green":
                        setActiveColor("red");
                        break;
                    default:
                        break;
                }
            }, 1000); 
        } else {
            clearInterval(intervalId); 
        }

        return () => clearInterval(intervalId); 
    }, [isCycleActive, activeColor]);

    return (
        <div className="box">
            <div className="extraButton">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={startCycle}>
                    Start Cycle
                </button>
                <button
                    type="button"
                    className="btn btn-primary mt-2"
                    onClick={changeLight}>
                    Change Light
                </button>
            </div>
            <div className="lightBox">
                <button
                    className={"traffic-light-button red " + (activeColor === "red" ? "active" : "")}
                    onClick={clickRed}>
                </button>
                <button
                    className={"traffic-light-button yellow " + (activeColor === "yellow" ? "active" : "")}
                    onClick={clickYellow}>
                </button>
                <button
                    className={"traffic-light-button " + (isGreenPurple ? "purple" : "green") + (activeColor === "green" ? " active" : "")}
                    onClick={clickGreen}>
                </button>
            </div>
        </div>
    );
}

export default TrafficLights;
