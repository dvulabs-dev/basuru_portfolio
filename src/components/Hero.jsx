import React from 'react';

const Hero = () => {
    return (
        <section className="relative min-h-screen bg-dark overflow-hidden flex items-center justify-center pt-32 pb-20 px-8 sm:px-16 lg:px-24">
            {/* Background gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Content */}
                <div className="lg:col-span-7 space-y-6">
                    <div className="text-slate-200 font-semibold tracking-widest uppercase mb-2 flex items-center gap-2">
                        WELCOME! <span className="text-xl">👋</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white uppercase tracking-tight">
                        I AM BASURU <br /> NAVEEN
                    </h1>

                    <h2 className="text-2xl font-bold text-white mb-2">
                        Professional
                    </h2>

                    <p className="text-slate-300 text-base max-w-xl leading-relaxed">
                        Specialized in High-Voltage Systems, Power Electronics, and Industrial Automation. Expertise in designing efficient, reliable electrical infrastructure for modern applications.
                    </p>

                    {/* Social Icons & Buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-6">
                        <div className="flex items-center gap-3 mr-4">
                            {['instagram', 'linkedin', 'facebook', 'upwork'].map((social, idx) => (
                                <a key={social} href={`#${social}`} className="w-10 h-10 rounded-full border border-neon/50 flex items-center justify-center text-slate-300 hover:bg-neon hover:text-dark transition-all duration-300 shadow-[0_0_10px_rgba(255,204,0,0.2)]">
                                    <span className="text-xs">{social.substring(0, 2).toUpperCase()}</span>
                                </a>
                            ))}
                        </div>
                        
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
                <div className="lg:col-span-5 relative flex justify-center">
                    <div className="relative z-10 w-full max-w-md aspect-[4/5] bg-gradient-to-t from-dark to-transparent rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                        {/* Hero Image */}
                        <img 
                            src="/hero.png" 
                            alt="Basuru Naveen" 
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />

                        {/* Floating Icons */}
                        <div className="absolute top-20 -left-6 w-16 h-16 bg-[#330000] border border-[#ff9a00] rounded-xl flex items-center justify-center transform -rotate-12 shadow-lg shadow-orange-500/20 z-20">
                            <span className="text-[#ff9a00] font-bold text-xl">Ki</span>
                        </div>
                        <div className="absolute bottom-32 -right-6 w-16 h-16 bg-[#001e36] border border-[#31a8ff] rounded-xl flex items-center justify-center transform rotate-12 shadow-lg shadow-blue-500/20 z-20">
                            <span className="text-[#31a8ff] font-bold text-xl">Alt</span>
                        </div>

                        {/* Glass overlay at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="w-full mt-24 lg:mt-32 relative z-10">
                <div className="w-full h-12 bg-neon mb-12 shadow-[0_0_30px_rgba(255,204,0,0.2)]"></div>
                
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
