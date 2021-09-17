import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const Timer = (hoursMinSecs) => {
  const { days = 29, hours = 23, minutes = 59, seconds = 59 } = hoursMinSecs;
  const [[drs, hrs, mins, secs], setTime] = useState([days, hours, minutes, seconds]);

  const tick = () => {
    if (drs === 0 && hrs === 0 && mins === 0 && secs === 0) reset();
    else if (drs === 0 && hrs === 0) {
      setTime([drs - 1, 23, 59, 59]);
    } else if (mins === 0 && secs === 0) {
      setTime([drs, hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([drs, hrs, mins - 1, 59]);
    } else {
      setTime([drs, hrs, mins, secs - 1]);
    }
  };

  const reset = () => setTime([parseInt(days), parseInt(hours), parseInt(minutes), parseInt(seconds)]);

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  const TimeArea = styled.div`
    font-size: 35px;
    padding-bottom: 30px;
  `;

  return (
    <TimeArea>
      {`${drs.toString().padStart(2, '0')}일 ${hrs.toString().padStart(2, '0')}시간 ${mins
        .toString()
        .padStart(2, '0')}분${secs.toString().padStart(2, '0')}초`}
    </TimeArea>
  );
};

export default Timer;
