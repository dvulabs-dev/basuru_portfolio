import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 bg-black border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center text-slate-500 text-sm">
                <div className="mb-4 md:mb-0 flex items-center">
                    {/* Logo placeholder */}
                    <span className="font-bold text-white mr-2">Basuru Naveen</span>
                    <span>......</span>
                </div>
                <div className="md:ml-8">
                    ALL RIGHTS RESERVED
                </div>
            </div>
        </footer>
    );
};

export default Footer;
