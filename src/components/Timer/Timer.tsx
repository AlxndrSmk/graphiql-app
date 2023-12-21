import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/context/AuthProvider';
import { millisecondsToTime } from '@/utils/msToTime';

import styles from './Timer.module.scss';

const Timer: React.FC = () => {
  const [timer, setTimer] = useState('00:00');
  const Ref = useRef<ReturnType<typeof setInterval> | null>(null);
  const { expirationTime } = useAuth();
  const humanReadableTime = millisecondsToTime(expirationTime);

  const getTimeRemaining = (time: number) => {
    const total = time;
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    return {
      total,
      minutes,
      seconds,
    };
  };

  const startTimer = (time: number) => {
    const { total, minutes, seconds } = getTimeRemaining(time);
    if (total >= 0) {
      setTimer(
        (minutes > 9 ? minutes : `0${minutes}`) +
          ':' +
          (seconds > 9 ? seconds : `0${seconds}`)
      );
    }
  };

  const clearTimer = () => {
    setTimer(humanReadableTime);
    if (Ref.current) clearInterval(Ref.current);
    let time = expirationTime;

    const timeoutId = global.setInterval(() => {
      startTimer(time);
      time -= 1000;
    }, 1000);
    Ref.current = timeoutId;
  };

  useEffect(() => {
    clearTimer();
  });

  return <div className={styles.timer}>{timer}</div>;
};

export default Timer;
