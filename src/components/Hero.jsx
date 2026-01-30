import React from 'react';

const Hero = () => {
    return (
        <section className="relative min-h-screen bg-dark overflow-hidden flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            {/* Background gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Content */}
                <div className="lg:col-span-7 space-y-8">
                    <div className="inline-block border border-accent/50 px-4 py-1 rounded text-accent text-sm tracking-widest font-semibold uppercase mb-4">
                        Profession <span className="text-white">Electrical Engineer</span>
                    </div>

                    <p className="text-slate-400 italic text-lg">
                        Specialized in High-Voltage Systems, Power Electronics, and Industrial Automation...
                    </p>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                        POWERING INNOVATION WITH <span className="text-neon neon-text">ADVANCED ELECTRICAL</span> ENGINEERING AND SYSTEM DESIGN.
                    </h1>

                    <p className="text-slate-300 text-lg max-w-2xl">
                        Expertise in designing efficient, reliable electrical infrastructure for modern applications.
                    </p>

                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl w-full max-w-lg">
                        <h3 className="text-xl font-bold mb-3 text-white">Contact me for your project:</h3>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition"
                            />
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition"
                            />
                            <textarea
                                placeholder="Your message"
                                rows="2"
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition resize-none"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-neon text-dark font-bold py-3 rounded-lg hover:bg-cyan-300 transition duration-300 text-base uppercase tracking-wider shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)]"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right Image */}
                <div className="lg:col-span-5 relative flex justify-center">
                    <div className="relative z-10 w-full max-w-md aspect-[4/5] bg-gradient-to-t from-dark to-transparent rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                        {/* Placeholder Image */}
                        <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                            <span className="text-slate-600 font-bold text-xl px-10 text-center">Electronic Prototype Image</span>
                        </div>

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
        </section>
    );
};

export default Hero;
