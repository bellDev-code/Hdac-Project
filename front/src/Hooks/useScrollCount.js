import { krwConvertor } from '@Utils/string';
import { useRef, useEffect, useCallback } from 'react';

const useScrollCount = (end, start = 0, duration = 3000, delay = 0, isKrw = false) => {
  const element = useRef();
  const observer = useRef(null);

  const onScroll = useCallback(
    ([entry]) => {
      const { current } = element;
      if (entry.isIntersecting) {
        let currentNumber = start;
        const counter = setInterval(() => {
          currentNumber += 30000;
          if (isKrw) {
            current.innerHTML = krwConvertor(currentNumber);
          } else {
            current.innerHTML = currentNumber;
          }
          if (currentNumber >= end) {
            // end
            // 오차 계산

            currentNumber = end;

            if (isKrw) {
              current.innerHTML = krwConvertor(currentNumber);
            } else {
              current.innerHTML = currentNumber;
            }

            clearInterval(counter);
            observer.current.disconnect(element.current);
          }
        }, duration);
      }
    },
    [end, start, duration, element, delay, isKrw],
  );

  useEffect(() => {
    if (element.current) {
      observer.current = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.current.observe(element.current);
    }

    return () => observer && observer.current?.disconnect(element.current);
  }, [onScroll]);

  return {
    ref: element,
  };
};

export default useScrollCount;
