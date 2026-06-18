import React, { useState } from 'react';

const ContactInfo = ({ icon, label, value, href }) => (
    <a
        href={href}
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-neon/40 transition-all duration-300 group"
    >
        <div className="w-11 h-11 rounded-xl bg-neon/10 border border-neon/20 flex items-center justify-center text-neon flex-shrink-0 group-hover:bg-neon/20 transition-all">
            {icon}
        </div>
        <div className="min-w-0">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">{label}</p>
            <p className="text-white text-sm font-medium truncate">{value}</p>
        </div>
        <svg className="w-4 h-4 text-slate-600 group-hover:text-neon ml-auto flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    </a>
);

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate send — replace with your EmailJS / backend endpoint
        await new Promise(res => setTimeout(res, 1500));
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(null), 4000);
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-dark relative overflow-hidden">

            {/* Decorative blobs */}
            <div className="absolute -top-32 -left-32 w-72 h-72 bg-neon/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 relative">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                        Have a project in mind, a question, or just want to say hello?
                        My inbox is always open. I'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

                    {/* Left — Contact Info */}
                    <div className="lg:col-span-2 space-y-4">
                        <h3 className="text-white font-semibold text-lg mb-6">Contact Information</h3>

                        <ContactInfo
                            icon={
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            }
                            label="Email"
                            value="basuru@example.com"
                            href="mailto:basuru@example.com"
                        />

                        <ContactInfo
                            icon={
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            }
                            label="Phone"
                            value="+371 XX XXX XXXX"
                            href="tel:+371XXXXXXXX"
                        />

                        <ContactInfo
                            icon={
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            }
                            label="Location"
                            value="Riga, Latvia, Europe"
                            href="https://maps.google.com/?q=Riga,Latvia"
                        />

                        <ContactInfo
                            icon={
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            }
                            label="LinkedIn"
                            value="linkedin.com/in/basuru"
                            href="https://www.linkedin.com/in/basuru"
                        />

                        <ContactInfo
                            icon={
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                                </svg>
                            }
                            label="GitHub"
                            value="github.com/basuru"
                            href="https://github.com/basuru"
                        />

                        {/* Availability badge */}
                        <div className="flex items-center gap-3 pt-2 pl-1">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </span>
                            <p className="text-sm text-slate-400">
                                Currently <span className="text-emerald-400 font-semibold">available</span> for freelance & full-time roles
                            </p>
                        </div>
                    </div>

                    {/* Right — Contact Form */}
                    <div className="lg:col-span-3">
                        <div className="bg-white/3 border border-white/8 rounded-3xl p-6 sm:p-8 backdrop-blur-sm">
                            <h3 className="text-white font-semibold text-lg mb-6">Send a Message</h3>

                            {status === 'success' ? (
                                <div className="flex flex-col items-center justify-center py-16 text-center">
                                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mb-5">
                                        <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                                    <p className="text-slate-400 text-sm">Thank you for reaching out. I'll get back to you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">

                                    {/* Name + Email row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Your Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="John Doe"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-neon/50 focus:bg-white/8 transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Email Address *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="john@example.com"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-neon/50 focus:bg-white/8 transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Subject *</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            placeholder="Project Collaboration / Job Opportunity / General Query..."
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-neon/50 focus:bg-white/8 transition-all"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Message *</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            placeholder="Tell me about your project, idea, or how I can help you..."
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-neon/50 focus:bg-white/8 transition-all resize-none"
                                        />
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-neon text-dark font-bold text-sm uppercase tracking-wider hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_20px_rgba(0,229,255,0.35)] hover:shadow-[0_0_30px_rgba(0,229,255,0.55)] disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {status === 'sending' ? (
                                            <>
                                                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                </svg>
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
