import { useState, useEffect } from 'react';

const Clock = () => {
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(currentTime());
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const doubleDigit = (number) => {
    const result = number.toString();
    return result.length === 2 ? result : "0" + result;
  }

  const currentTime = () => {
    const date = new Date();
    const h = doubleDigit(date.getHours());
    const m = doubleDigit(date.getMinutes());
    const s = doubleDigit(date.getSeconds());
    return `${h}:${m}:${s}`;
  }

  const [time, setTime] = useState(currentTime());

  return (
    <span>{time}</span>
  );
}

export default Clock;