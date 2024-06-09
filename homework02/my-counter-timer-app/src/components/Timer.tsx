import { useState, useEffect } from 'react';
import "./Timer.css"

const Timer = () => {
  const [timer, setTimer] = useState(1);
  

  useEffect(() => {
    const countdown = setInterval(() => {
        setTimer((sec) => sec + 1);
    }, 1000)

    const clearIntervalFunction = () => clearInterval(countdown);

    return clearIntervalFunction;
  }, [])
  
  const resetTimer = () => {
    setTimer(1)
  }

  return (
    <div className="timer">
      <h1>Timer: {timer}</h1>
      <button onClick={resetTimer} className="btn">Reset</button>
    </div>
  );
};

export default Timer;
