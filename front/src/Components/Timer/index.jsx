import React, { useState, useEffect, useMemo, useCallback } from 'react';
import styled from '@emotion/styled';

const Timer = ({ expireTime }) => {
  const extract = useCallback((time) => {
    const date = new Date(time);
    return [date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()];
  }, []);

  useEffect(() => {
    // item update
    setTime(extract(expireTime));
  }, [expireTime]);

  const [[drs, hrs, mins, secs], setTime] = useState(extract(expireTime));

  const tick = () => {
    if (drs === 0 && hrs === 0) {
      setTime([drs - 1, 23, 59, 59]);
    } else if (mins === 0 && secs === 0) {
      setTime([drs, hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([drs, hrs, mins - 1, 59]);
    } else {
      setTime([drs, hrs, mins, secs - 1]);
    }
  };

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
