import React from 'react';

const STARS = [
  { top: '8%', left: '15%', delay: 0, duration: 3200 },
  { top: '15%', left: '55%', delay: 1400, duration: 2800 },
  { top: '22%', left: '30%', delay: 2800, duration: 3400 },
  { top: '28%', left: '75%', delay: 900, duration: 3000 },
  { top: '35%', left: '10%', delay: 4300, duration: 3600 },
  { top: '42%', left: '65%', delay: 1900, duration: 2900 },
  { top: '48%', left: '88%', delay: 3500, duration: 3300 },
  { top: '54%', left: '22%', delay: 600, duration: 3100 },
  { top: '60%', left: '72%', delay: 5200, duration: 3500 },
  { top: '66%', left: '42%', delay: 2300, duration: 2700 },
  { top: '72%', left: '82%', delay: 4100, duration: 3200 },
  { top: '78%', left: '18%', delay: 1700, duration: 3400 },
  { top: '84%', left: '60%', delay: 6200, duration: 3000 },
  { top: '12%', left: '90%', delay: 6800, duration: 3300 },
  { top: '30%', left: '5%', delay: 3100, duration: 3100 },
  { top: '45%', left: '80%', delay: 4900, duration: 3600 },
  { top: '58%', left: '35%', delay: 7300, duration: 2800 },
  { top: '70%', left: '12%', delay: 5600, duration: 3500 },
  { top: '86%', left: '48%', delay: 7900, duration: 3200 },
  { top: '92%', left: '85%', delay: 4400, duration: 2900 },
];

export function ShootingStars({ count = 20, className = '' }) {
  const visibleStars = STARS.slice(0, count);

  return (
    <div className={`night-sky ${className}`} aria-hidden="true">
      {visibleStars.map((star, i) => (
        <div
          key={i}
          className="shooting_star"
          style={{
            top: star.top,
            left: star.left,
            '--delay': `${star.delay}ms`,
            '--duration': `${star.duration}ms`,
          }}
        />
      ))}
    </div>
  );
}
