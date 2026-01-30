import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${scrolled ? 'w-[90%] max-w-4xl' : 'w-[95%] max-w-5xl'}`}>
            <div className="bg-dark/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-4 flex items-center justify-between shadow-lg shadow-neon/5">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-tr from-neon to-blue-600 rounded-lg flex items-center justify-center font-bold text-black">
                        B
                    </div>
                    <span className="font-bold text-white tracking-wider hidden sm:block">Basuru Naveen</span>
                </div>

                {/* Links */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#" className="text-slate-300 hover:text-white hover:text-neon transition text-sm font-medium">Home</a>
                    <a href="#skills" className="text-slate-300 hover:text-white hover:text-neon transition text-sm font-medium">Skills</a>
                    <a href="#projects" className="text-slate-300 hover:text-white hover:text-neon transition text-sm font-medium">Projects</a>
                    <a href="#about" className="text-slate-300 hover:text-white hover:text-neon transition text-sm font-medium">About Me</a>
                </div>

                {/* CTA */}
                <a
                    href="/Basuru_Naveen_CV.txt"
                    download
                    className="bg-neon text-dark font-bold py-2 px-6 rounded-full hover:bg-cyan-300 transition duration-300 text-sm uppercase tracking-wider shadow-[0_0_15px_rgba(0,229,255,0.3)] flex items-center gap-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    Download CV
                </a>

            </div>
        </nav>
    );
};

export default Navbar;
