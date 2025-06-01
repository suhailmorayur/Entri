import React, { useEffect, useState } from 'react'
function ResendOtp() {
    const [valid, notevalid] = useState()
    const [timeLeft, setTimeLeft] = useState(40)
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev === 0) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1
            });
        }, 1000);
        return () => clearInterval(timer)
    }, []);

    function handileReset() {
        clearInterval(timeLeft)
    }
    return (
        <div className=" flex flex-row gap-3 pt-6 items-center">
            <button onClick={handileReset} disabled={timeLeft > 0}
                className='border px-[21px] py-[12px]'>Resend Otp</button>
            {timeLeft}s
        </div>
    );
}
export default ResendOtp;
