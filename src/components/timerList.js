import React, { useState } from "react";
import CountdownTimer from "./countDownTimer";
import styles from "@/styles/timer.module.scss";

const TimerList = () => {
  const [timers, setTimers] = useState([]);
  const [inputTime, setInputTime] = useState(60);

  const handleAddTimer = () => {
    setTimers((prevTimers) => [
      ...prevTimers,
      { id: Date.now(), startTime: inputTime },
    ]);
  };

  const handleRemoveTimer = (id) => {
    setTimers((prevTimers) => prevTimers.filter((timer) => timer.id !== id));
  };

  return (
    <div className={styles.timerList}>
      <div className={styles.addTimerContainer}>
        <input
          type="number"
          value={inputTime}
          onChange={(e) => setInputTime(Math.max(0, parseInt(e.target.value)))}
          className= {styles.timerInput}
        />
        <button
          className={`${styles.commonBtnStyles} ${styles.addTimerButton}`}
          onClick={handleAddTimer}
        >
          Add Timer
        </button>
      </div>
      {timers.map((timer) => (
        <div key={timer.id} className={styles.timerItem}>
          <CountdownTimer startTime={timer.startTime} />
          <button
            className={`${styles.commonBtnStyles} ${styles.removeTimerButton}`}
            onClick={() => handleRemoveTimer(timer.id)}
          >
            Remove Timer
          </button>
        </div>
      ))}
    </div>
  );
};

export default TimerList;
