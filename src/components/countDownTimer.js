import { formatTime } from "@/utils";
import React, { useState, useEffect } from "react";
import styles from "@/styles/timer.module.scss";

const CountdownTimer = ({ startTime }) => {
  const [time, setTime] = useState(startTime);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        if (time > 0) {
          setTime((prevTime) => prevTime - 1);
        } else {
          clearInterval(intervalId);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [time, isRunning]);

  const handleStartTimer = () => {
    setIsRunning(true);
  };

  const handlePauseTimer = () => {
    setIsRunning(false);
  };

  return (
    <div className={styles.countdownTimer}>
      <div>{formatTime(time)}</div>
      <div>
        <div className={styles.startPauseBtnContainer}>
          <button
            className={`${styles.commonBtnStyles} ${styles.startBtn} ${
              isRunning && styles.disabledOpacity
            }`}
            onClick={handleStartTimer}
            disabled={isRunning}
          >
            Start
          </button>
          <button
            className={`${styles.commonBtnStyles} ${styles.pauseBtn} ${
              !isRunning && styles.disabledOpacity
            }`}
            onClick={handlePauseTimer}
            disabled={!isRunning}
          >
            Pause
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
