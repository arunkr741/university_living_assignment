import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ startTime }) => {
  const [time, setTime] = useState(startTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (time > 0) {
        setTime((prevTime) => prevTime - 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  return <div>{time} seconds</div>;
};

export default CountdownTimer;
