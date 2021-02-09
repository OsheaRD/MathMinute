import React, { useState, useEffect, useRef } from "react";

const Timekeeper= () => {

    const [timer, setTimer] = useState(60);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = timer>0 && setInterval(() => {
         setTimer(prevTimer => prevTimer - 1);
        }, 1000);
        return () => {
         clearInterval(intervalRef.current);
        };
       }, [])
    
       return (
        <div>
         <h2>Countdown:{timer}</h2>
        </div>
       );
    
    }

export default Timekeeper;