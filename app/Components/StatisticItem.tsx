// components/StatisticItem.tsx
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface StatisticItemProps {
  end: number;
  suffix?: string;
  label: string;
}

const StatisticItem: React.FC<StatisticItemProps> = ({ end, suffix = '', label }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="text-left">
      <h1
        ref={ref}
        className="text-4xl sm:text-5xl font-bold text-white overflow-hidden"
      >
        <span className={`inline-block ${inView ? 'animate-roll-up' : ''}`}>
          {inView ? (
            <CountUp
              end={end}
              duration={2}
              separator=","
              suffix={suffix}
            />
          ) : (
            0
          )}
        </span>
      </h1>
      <p className="text-lg sm:text-xl">
        {label}
      </p>
    </div>
  );
};

export default StatisticItem;
