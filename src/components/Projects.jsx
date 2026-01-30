import React from 'react';

const ProjectCard = ({ number, title, description, link }) => (
    <div className="relative p-8 rounded-2xl border border-neon/30 hover:border-neon transition duration-300 bg-white/5 hover:bg-white/10 group">
        <div className="absolute -top-6 left-8 bg-dark px-4 text-4xl font-bold text-neon font-outline-2">
            {number}
        </div>
        <h3 className="mt-4 text-xl font-bold text-white mb-4">
            {title}
        </h3>
        <p className="text-slate-400 mb-6">
            {description}
        </p>
        <a href={link} className="text-neon font-bold text-sm uppercase tracking-wider hover:underline">
            View Details &rarr;
        </a>
    </div>
);

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gradient-to-b from-dark to-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-20 uppercase tracking-wider">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <ProjectCard
                        number="01"
                        title="Smart Home Hub"
                        description="A centralized IoT gateway allowing control of various home automation devices via a single interface."
                        link="#"
                    />
                    <ProjectCard
                        number="02"
                        title="Weather Station"
                        description="Autonomous solar-powered weather monitoring station with LoRaWAN connectivity for remote data logging."
                        link="#"
                    />
                    <ProjectCard
                        number="03"
                        title="Robot Controller"
                        description="Custom flight controller PCB for quadcopters featuring STM32 MCU and integrated IMU sensors."
                        link="#"
                    />
                </div>
            </div>
        </section>
    );
};

export default Projects;
