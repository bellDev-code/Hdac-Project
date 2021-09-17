import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const Timer = () => {
  const [minutes, setMinutes] = useState(parseInt(59));
  const [seconds, setSeconds] = useState(parseInt(59));

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }

      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  const TimeArea = styled.div`
    font-size: 30px;
    padding-bottom: 30px;
  `;

  return (
    <TimeArea>
      {minutes}분 {seconds < 10 ? `0${seconds}` : seconds}초
    </TimeArea>
  );
};

export default Timer;
