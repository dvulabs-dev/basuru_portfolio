import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'certificate', label: '🏅 Certificates' },
  { key: 'scholarship', label: '🎓 Scholarships' },
];

const CertificateCard = ({ title, description, imageUrl, type }) => (
  <div className="group relative rounded-2xl border border-neon/20 hover:border-neon/60 transition-all duration-300 bg-white/5 hover:bg-white/10 overflow-hidden">
    {/* Type badge */}
    <div className="absolute top-3 right-3 z-10">
      <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border backdrop-blur-sm
        ${type === 'scholarship'
          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
          : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'}`}>
        {type === 'scholarship' ? '🎓 Scholarship' : '🏅 Certificate'}
      </span>
    </div>

    {imageUrl && (
      <div className="overflow-hidden h-48">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 h-48 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
    )}

    <div className="p-6">
      <h3 className="text-lg font-bold text-white mb-2 leading-tight">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/certificates');
        setCertificates(data);
      } catch (error) {
        console.error('Error fetching certificates:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCertificates();
  }, []);

  const filtered = activeFilter === 'all'
    ? certificates
    : certificates.filter(c => c.type === activeFilter);

  return (
    <section id="certificates" className="py-20 bg-dark relative">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-6 uppercase tracking-wider">
          Certificates & Scholarships
        </h2>
        <p className="text-center text-slate-400 mb-12 text-sm">
          Academic achievements and recognitions
        </p>

        {/* Filter Pills */}
        <div className="flex justify-center gap-3 mb-12">
          {FILTERS.map(f => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                ${activeFilter === f.key
                  ? 'bg-neon text-dark border-neon shadow-[0_0_15px_rgba(0,229,255,0.4)]'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'}`}
            >
              {f.label}
              {f.key !== 'all' && (
                <span className="ml-2 text-[10px] opacity-70">
                  ({certificates.filter(c => c.type === f.key).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-8 h-8 border-2 border-neon/30 border-t-neon rounded-full animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <p className="text-center text-slate-500 py-16">
            No {activeFilter === 'all' ? 'certificates or scholarships' : activeFilter + 's'} found. Add some from the admin dashboard.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(cert => (
              <CertificateCard
                key={cert._id}
                title={cert.title}
                description={cert.description}
                imageUrl={cert.imageUrl}
                type={cert.type || 'certificate'}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
