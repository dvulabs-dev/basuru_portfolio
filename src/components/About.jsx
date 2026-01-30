import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <div className="order-2 lg:order-1 space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider mb-8">
                        About Me
                    </h2>

                    <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                        <p>
                            Hi, I'm <strong className="text-white">Basuru Naveen</strong>.
                        </p>
                        <p>
                            I am a passionate <strong className="text-white">Electrical Engineer</strong> with a deep love for designing robust power systems and automation solutions. my journey began in <strong className="text-white">Sri Lanka</strong>, where I developed my foundational skills in electrical engineering.
                        </p>
                        <p>
                            Currently, I am based in <strong className="text-white">Latvia, Europe</strong>, where I continue to expand my expertise in power distribution, renewable energy, and industrial control systems. bringing a global perspective to every project I undertake.
                        </p>
                        <p>
                            Whether it's designing a high-speed PCB or coding firmware for a smart device, I am dedicated to precision, innovation, and excellence.
                        </p>
                    </div>
                </div>

                <div className="order-1 lg:order-2 relative flex justify-center">
                    <div className="relative w-full max-w-md aspect-square bg-gradient-to-tr from-accent to-purple-600 rounded-full opacity-20 filter blur-3xl absolute top-0 left-0"></div>

                    <div className="relative z-10 w-full max-w-md bg-slate-800 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        {/* About Me Image Placeholder */}
                        <div className="w-full h-[500px] flex items-center justify-center bg-gray-900 text-gray-500 flex-col">
                            <span className="text-xl font-bold mb-2">Basuru Naveen</span>
                            <span className="text-sm">(Profile Image)</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
