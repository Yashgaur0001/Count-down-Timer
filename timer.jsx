// src/CountdownTimer.js
import './App.css';
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [initialHours,setInitialHours]=useState(0);
    const [initialMinutes, setInitialMinutes] = useState(0);
    const [initialSeconds, setInitialSeconds] = useState(0);
    const [hours,sethours]=useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let countdownInterval = null;
        if (isActive) {
            countdownInterval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        if(hours === 0)
                        {
                        clearInterval(countdownInterval);
                        setIsActive(false);
                        }
                        else{
                            sethours(hours-1);
                            setMinutes(59);
                            setSeconds(59);
                        }
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                }
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(countdownInterval);
        }
        return () => clearInterval(countdownInterval);
    }, [isActive,hours, minutes, seconds]);

    const handleStart = () => {
        sethours(initialHours);
        setMinutes(initialMinutes);
        setSeconds(initialSeconds);
        setIsActive(true);
    };

    return (
        <div>
            <h1>Countdown Timer</h1>
            <div>
            <input
                    type="number"
                    // value={initialHours}
                    onChange={(e) => setInitialHours(parseInt(e.target.value))}
                    placeholder="Hours"
                />
                <input
                    type="number"
                    // value={initialMinutes}
                    onChange={(e) => setInitialMinutes(parseInt(e.target.value))}
                    placeholder="Minutes"
                />
                <input
                    type="number"
                    // value={initialSeconds}
                    onChange={(e) => setInitialSeconds(parseInt(e.target.value))}
                    placeholder="Seconds"
                />
                <button onClick={handleStart}>Start</button>
            </div>
            <div>
                {hours}:{minutes}:{seconds}
            </div>
        </div>
    );
};

export default CountdownTimer;
