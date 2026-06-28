import React from 'react';

const Hero = () => {
    return (
        <section className="relative min-h-screen bg-dark overflow-hidden flex flex-col justify-center pt-24 lg:pt-28 pb-12">
            {/* Background gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center px-8 sm:px-16 lg:px-24">
                {/* Left Content */}
                <div className="lg:col-span-7 space-y-4 lg:space-y-6 -translate-y-8 lg:-translate-y-12">
                    <div className="text-slate-200 font-semibold tracking-widest uppercase mb-2 flex items-center gap-2">
                        WELCOME! <span className="text-xl">👋</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-white uppercase tracking-tight">
                        I AM BASURU <br /> NAVEEN
                    </h1>

                    <h2 className="text-2xl font-bold text-white mb-2">
                        Professional
                    </h2>

                    <p className="text-slate-300 text-base max-w-xl leading-relaxed">
                        Specialized in High-Voltage Systems, Power Electronics, and Industrial Automation. Expertise in designing efficient, reliable electrical infrastructure for modern applications.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-4 lg:pt-6">
                        
                        <a href="#hire" className="bg-neon text-dark font-bold py-3 px-8 rounded-full hover:bg-white transition-all duration-300 text-sm tracking-wide shadow-[0_0_15px_rgba(255,204,0,0.4)] flex items-center gap-2">
                            Hire Me
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </a>
                        
                        <a href="#contact" className="border border-neon text-neon font-bold py-3 px-8 rounded-full hover:bg-neon/10 transition-all duration-300 text-sm tracking-wide shadow-[0_0_15px_rgba(255,204,0,0.1)]">
                            Need Any Solution?
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="lg:col-span-5 relative flex justify-center items-end">
                    {/* Glowing effect behind the image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-neon/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
                    
                    {/* Hero Image */}
                    <div className="relative z-10 w-full max-w-md pt-0 lg:pt-4 -translate-y-8 lg:-translate-y-16 pointer-events-none">
                        <img 
                            src="/hero.png" 
                            alt="Basuru Naveen" 
                            className="w-full h-auto object-contain drop-shadow-[0_0_15px_rgba(0,229,255,0.2)] pointer-events-auto" 
                        />
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="w-full -mt-16 lg:-mt-24 relative z-10">
                {/* Yellow Line - Full Width */}
                <div className="w-full h-10 lg:h-12 bg-neon mb-8 lg:mb-12 shadow-[0_0_30px_rgba(0,229,255,0.2)]"></div>
                
                <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { number: '5+', text: 'Years Of\nExperience' },
                            { number: '200+', text: 'Successful\nProjects' },
                            { number: '150+', text: 'Trusted\nClients' },
                            { number: '50+', text: 'SEO\nOptimization' }
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-dark/50 backdrop-blur-md border border-white/10 rounded-xl p-5 lg:p-6 flex items-center justify-center gap-3 hover:border-neon/50 transition-colors">
                                <span className="text-3xl lg:text-4xl font-bold text-neon">{stat.number}</span>
                                <span className="text-xs lg:text-sm text-slate-300 whitespace-pre-line leading-tight">{stat.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
