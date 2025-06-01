import React, { useEffect, useState } from 'react'
function ExpTimer() {
  const [timeLeft, setTimeLeft] = useState(15 * 60)
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 0) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      });
    }, 1000);
    return () => clearInterval(timer)
  }, []);
  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60))
    const s = String(seconds % 60)
    return `${m}:${s}`
  };
  return (
    <div className="mp-[30px] ">
      Otp Expiring In {formatTime(timeLeft)}
    </div>
  );
}
export default ExpTimer

