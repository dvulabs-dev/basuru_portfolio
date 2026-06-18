import React from 'react';

const SkillItem = ({ icon, title, description }) => (
    <div className="flex flex-col items-center text-center p-6 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition duration-300 group hover:scale-[1.02]">
        <div className="mb-4 text-neon group-hover:scale-110 transition duration-300">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-300 text-sm leading-relaxed">
            {description}
        </p>
    </div>
);

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-dark relative">
            <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16 uppercase tracking-wider">
                    Technical Skills
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <SkillItem
                        icon={<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>}
                        title="PCB Design"
                        description="High-speed digital, analog, and mixed-signal PCB layout using Altium Designer and KiCad."
                    />
                    <SkillItem
                        icon={<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>}
                        title="Embedded Firmware"
                        description="C/C++ programming for STM32, ESP32, and AVR microcontrollers. RTOS implementation."
                    />
                    <SkillItem
                        icon={<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>}
                        title="IoT Systems"
                        description="End-to-end IoT solutions integrated with cloud platforms using MQTT, HTTP, and LoRaWAN."
                    />
                    <SkillItem
                        icon={<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>}
                        title="Circuit Simulation"
                        description="SPICE simulation for power electronics, signal integrity analysis, and reliability testing."
                    />
                </div>

                <div className="mt-16 text-center">
                    <a href="#contact" className="inline-block bg-neon text-dark font-bold py-4 px-12 rounded-lg hover:bg-cyan-300 transition duration-300 text-lg uppercase tracking-wider shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                        View My Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Skills;
