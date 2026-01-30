import React, { useState, useEffect } from 'react';

const CountdownUnit = ({ value, label }) => (
    <div className="flex flex-col items-center mx-4">
        <div className="text-5xl md:text-7xl font-bold text-neon font-mono">
            {String(value).padStart(2, '0')}
        </div>
        <div className="text-slate-400 uppercase tracking-widest text-sm mt-2">
            {label}
        </div>
    </div>
);

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 11,
        hours: 10,
        minutes: 15,
        seconds: 19
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { days, hours, minutes, seconds } = prev;
                if (seconds > 0) seconds--;
                else {
                    seconds = 59;
                    if (minutes > 0) minutes--;
                    else {
                        minutes = 59;
                        if (hours > 0) hours--;
                        else {
                            hours = 23;
                            if (days > 0) days--;
                        }
                    }
                }
                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-20 bg-dark text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h3 className="text-2xl font-bold text-white uppercase tracking-widest mb-10">
                    The Event Starts In...
                </h3>

                <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
                    <CountdownUnit value={timeLeft.days} label="Days" />
                    <CountdownUnit value={timeLeft.hours} label="Hours" />
                    <CountdownUnit value={timeLeft.minutes} label="Minutes" />
                    <CountdownUnit value={timeLeft.seconds} label="Seconds" />
                </div>

                <button className="bg-neon text-dark font-bold py-4 px-16 rounded-lg hover:bg-cyan-300 transition duration-300 text-xl uppercase tracking-wider shadow-[0_0_30px_rgba(0,229,255,0.5)]">
                    I Want To Join
                </button>
            </div>
        </section>
    );
};

export default Countdown;
