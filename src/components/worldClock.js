import React, { useState, useEffect } from 'react';
import { formatTimeInReadableFormat } from '@/utils';
import styles from '@/styles/worldClock.module.scss';

const WorldClock = () => {
  const [timezones, setTimezones] = useState([]);
  const [selectedTimezone, setSelectedTimezone] = useState('Africa/Abidjan');
  const [currentTime, setCurrentTime] = useState('');


  useEffect(() => {
    const fetchTimezones = async () => {
      try {
        const response = await fetch('https://timeapi.io/api/TimeZone/AvailableTimeZones');
        const data = await response.json();
        setTimezones(data);
      } catch (error) {
        console.error('Error fetching timezones:', error);
      }
    };

    fetchTimezones();
  }, []);

  const fetchCurrentTime = async () => {
    try {
      const response = await fetch(`https://timeapi.io/api/Time/current/zone?timeZone=${selectedTimezone}`);
      const data = await response.json();
      setCurrentTime(data.time);
    } catch (error) {
      console.error('Error fetching current time:', error);
    }
  };

  useEffect(() => {
    fetchCurrentTime();

    const intervalId = setInterval(fetchCurrentTime, 60000);

    return () => clearInterval(intervalId);
  }, [selectedTimezone]);

  return (
    <div className={styles.worldClockContainer}>
      <label>Select Timezone:</label>
      <select value={selectedTimezone} onChange={(e) => setSelectedTimezone(e.target.value)}>
        {timezones.map((timezone) => (
          <option key={timezone} value={timezone}>
            {timezone}
          </option>
        ))}
      </select>

      <div className={styles.currentTime}>
        <h2>Current Time Details:</h2>
        <p className={styles.timezoneText}>Timezone: {selectedTimezone}</p>
        <p className={styles.timeText}>Time: {currentTime}</p>
        {/* <p className={styles.timeText}>Timezone Offset: {currentTime}</p> */}
      </div>
    </div>
  );
};

export default WorldClock;
