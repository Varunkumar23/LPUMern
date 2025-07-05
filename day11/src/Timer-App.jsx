import { useState, useEffect } from "react";

const App = () => {
  const [timeInSecs, setTimeInSec] = useState(0);
  const [isTimeRunning, setIsTimeRunning] = useState(true);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let intervalId = null;
    if (isTimeRunning) {
      intervalId = setInterval(() => {
        setTimeInSec((prev) => {
          return prev + 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isTimeRunning]);

  const handlePause = () => {
    if (isTimeRunning) {
      setIsTimeRunning(false);
    }
  };

  const handlePlay = () => {
    if (!isTimeRunning) {
      setIsTimeRunning(true);
    }
  };

  const handleLap = () => {
    setLaps((prev) => {
      const temp = [...prev];
      temp.push(timeInSecs);
      return temp;
    });
  };

  const handleReset = () => {
    setTimeInSec(0);
    setIsTimeRunning(false);
  };

  const hours = Math.floor(timeInSecs / 3600) // derived state variable
    .toString()
    .padStart(2, "0");

  const minutes = Math.floor((timeInSecs % 3600) / 60)
    .toString()
    .padStart(2, "0");

  const seconds = (timeInSecs % 60).toString().padStart(2, "0");
  return (
    <div>
      <h2>
        {hours}:{minutes}:{seconds}
      </h2>
      {isTimeRunning ? (
        <button onClick={handlePause}>PAUSE</button>
      ) : (
        <button onClick={handlePlay}>PLAY</button>
      )}
      <button onClick={handleLap}>Lap</button>
      <button onClick={handleReset}>Reset</button>
      <div>
        {laps.map((elem, idx) => {
          return <h2 key={idx}>{elem}</h2>;
        })}
      </div>
    </div>
  );
};

export default App;
