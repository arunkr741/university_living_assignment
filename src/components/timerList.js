import React, { useState } from 'react';
import CountdownTimer from './countDownTimer';

const TimerList = () => {
  const [timers, setTimers] = useState([]);

  const handleAddTimer = () => {
    setTimers((prevTimers) => [...prevTimers, { id: Date.now(), startTime: 60 }]);
  };

  const handleRemoveTimer = (id) => {
    setTimers((prevTimers) => prevTimers.filter((timer) => timer.id !== id));
  };

  return (
    <div>
      <button onClick={handleAddTimer}>Add Timer</button>
      {timers.map((timer) => (
        <div key={timer.id}>
          <CountdownTimer startTime={timer.startTime} />
          <button onClick={() => handleRemoveTimer(timer.id)}>Remove Timer</button>
        </div>
      ))}
    </div>
  );
};

export default TimerList;
