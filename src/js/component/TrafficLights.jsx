import React, { useState, useEffect } from "react";
import "../../styles/index.css";

function TrafficLights() {
    const [activeColor, setActiveColor] = useState("red");
    const [isCycleActive, setIsCycleActive] = useState(false);

    const clickRed = () => {
        setActiveColor("red");
        setIsCycleActive(false); // Detenemos el ciclo cuando se presiona el botón manualmente
    };

    const clickYellow = () => {
        setActiveColor("yellow");
        setIsCycleActive(false); // Detenemos el ciclo cuando se presiona el botón manualmente
    };

    const clickGreen = () => {
        setActiveColor("green");
        setIsCycleActive(false); // Detenemos el ciclo cuando se presiona el botón manualmente
    };

    const startCycle = () => {
        if (isCycleActive) {
            setIsCycleActive(false); // Si el ciclo ya está activo, lo detenemos
        } else {
            setIsCycleActive(true); // Si el ciclo no está activo, lo iniciamos
        }
    };

    useEffect(() => {
        let intervalId

        if (isCycleActive) {
         let intervalId = setInterval(() => {
                // Cambiamos el color del semáforo en un ciclo
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
            }, 1000); // Cambia de color cada segundo
        } else {
            clearInterval(intervalId); // Detenemos el ciclo si isCycleActive es falso
        }

        return () => clearInterval(intervalId); // Limpiamos el temporizador al desmontar el componente
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
                    onClick={clickRed}>
                    Red
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
                    className={"traffic-light-button green " + (activeColor === "green" ? "active" : "")}
                    onClick={clickGreen}>
                </button>
            </div>
        </div>
    );
}

export default TrafficLights;
