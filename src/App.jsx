import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Countdown from './components/Countdown';
import Footer from './components/Footer';

function App() {
    return (
        <div className="bg-dark min-h-screen text-white font-sans selection:bg-neon selection:text-black">
            <Navbar />
            <Hero />
            <Skills />
            <Projects />
            <About />
            <Countdown />
            <Footer />
        </div>
    );
}

export default App;
