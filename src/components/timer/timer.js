import React, { useState, useEffect } from 'react';

const Timer = (props) => {
  let { time, id, updateItemTimer, timerIsActive } = props;
  const [isActive, setIsActive] = useState(timerIsActive);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
    updateItemTimer(time < 1 ? 0 : (time = time - 1), id, false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      isActive && updateItemTimer(time < 1 ? 0 : (time = time - 1), id, true);
      if (time < 1) {
        setIsActive(false);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isActive, timerIsActive]);

  const m = Math.floor(time / 60)
    .toString()
    .padStart(2, '0');
  const s = (time - m * 60).toString().padStart(2, '0');

  return (
    <span className="description">
      <button className="icon icon-play" onClick={handleStart} />
      <button className="icon icon-pause" onClick={handleStop} />
      {m} : {s}
    </span>
  );
};

export default Timer;
