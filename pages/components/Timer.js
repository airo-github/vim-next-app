import React, { useContext } from 'react';
import { TimerContext } from '../../contexts/TimerContext';

const TimerComponent = () => {
  const timer = useContext(TimerContext);

  return (
    <div>
      <p>Timer: {timer}</p>
    </div>
  );
};

export default TimerComponent;

