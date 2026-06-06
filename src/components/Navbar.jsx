import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NAV_LINKS = [
    { label: 'Home',         href: '#' },
    { label: 'Skills',       href: '#skills' },
    { label: 'Projects',     href: '#projects' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Courses',      href: '#courses' },
    { label: 'About',        href: '#about' },
    { label: 'Contact',      href: '#contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [cvUrl, setCvUrl] = useState('/Basuru_Naveen_CV.txt'); // Fallback

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);

        // Fetch CV URL
        const fetchSettings = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/settings');
                if (data && data.cvUrl) {
                    // Force download for cloudinary links using fl_attachment
                    const downloadUrl = data.cvUrl.replace('/upload/', '/upload/fl_attachment/');
                    setCvUrl(downloadUrl);
                }
            } catch (error) {
                console.error("Failed to fetch settings", error);
            }
        };
        fetchSettings();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when clicking a link
    const handleLinkClick = () => setMenuOpen(false);

    return (
        <>
            <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${scrolled ? 'w-[90%] max-w-4xl' : 'w-[95%] max-w-5xl'}`}>
                <div className="bg-dark/80 backdrop-blur-md border border-white/10 rounded-full px-5 py-3.5 flex items-center justify-between shadow-lg shadow-neon/5">

                    {/* Logo */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                        <div className="w-8 h-8 bg-gradient-to-tr from-neon to-blue-600 rounded-lg flex items-center justify-center font-bold text-black text-sm">
                            B
                        </div>
                        <span className="font-bold text-white tracking-wider hidden sm:block text-sm">Basuru Naveen</span>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-6">
                        {NAV_LINKS.map(link => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-slate-300 hover:text-neon transition-colors duration-200 text-sm font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Right side: CV + Hamburger */}
                    <div className="flex items-center gap-3">
                        <a
                            href={cvUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:flex bg-neon text-dark font-bold py-2 px-5 rounded-full hover:bg-cyan-300 transition-all duration-300 text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(0,229,255,0.3)] items-center gap-1.5"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                            </svg>
                            CV
                        </a>

                        {/* Hamburger — mobile / tablet */}
                        <button
                            onClick={() => setMenuOpen(prev => !prev)}
                            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <div className="w-5 h-4 flex flex-col justify-between">
                                <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                                <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                                <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            <div
                className={`fixed inset-x-4 top-[90px] z-40 lg:hidden transition-all duration-300 ease-in-out ${
                    menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
                }`}
            >
                <div className="bg-dark/95 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/50">

                    {/* Nav links */}
                    <div className="p-4 space-y-1">
                        {NAV_LINKS.map((link, i) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={handleLinkClick}
                                className="flex items-center justify-between px-4 py-3 rounded-2xl text-slate-300 hover:text-white hover:bg-white/8 transition-all duration-200 text-sm font-medium"
                                style={{ animationDelay: `${i * 40}ms` }}
                            >
                                <span>{link.label}</span>
                                <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="border-t border-white/5 mx-4" />

                    {/* CV download */}
                    <div className="p-4">
                        <a
                            href={cvUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleLinkClick}
                            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-neon text-dark font-bold text-sm uppercase tracking-wider hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)]"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                            </svg>
                            Download CV
                        </a>
                    </div>
                </div>
            </div>

            {/* Backdrop */}
            {menuOpen && (
                <div
                    className="fixed inset-0 z-30 lg:hidden bg-black/20 backdrop-blur-sm"
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </>
    );
};

export default Navbar;
