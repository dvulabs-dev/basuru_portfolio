import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const TABS = [
  {
    key: 'projects',
    label: 'Projects',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-violet-500 to-purple-600',
    accent: '#8b5cf6',
    hasLink: true,
    linkLabel: 'Project Link',
    linkKey: 'projectLink',
  },
  {
    key: 'certificates',
    label: 'Certificates',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    color: 'from-cyan-500 to-blue-600',
    accent: '#06b6d4',
    hasLink: false,
  },
  {
    key: 'courses',
    label: 'Courses',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'from-emerald-500 to-teal-600',
    accent: '#10b981',
    hasLink: true,
    linkLabel: 'Course Link',
    linkKey: 'courseLink',
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'from-slate-500 to-gray-600',
    accent: '#64748b',
    hasLink: false,
  },
];

const UploadIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const TrashIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const Spinner = () => (
  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
  </svg>
);

const Toast = ({ message, type, onClose }) => (
  <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl border backdrop-blur-xl transition-all duration-300
    ${type === 'success' ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300' : 'bg-red-500/20 border-red-500/40 text-red-300'}`}>
    {type === 'success' ? (
      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ) : (
      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    )}
    <span className="text-sm font-medium">{message}</span>
    <button onClick={onClose} className="ml-2 opacity-60 hover:opacity-100 transition-opacity">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
);

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({ title: '', description: '', link: '' });
  const [certType, setCertType] = useState('certificate');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [toast, setToast] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const [certFilter, setCertFilter] = useState('all');
  const fileInputRef = useRef(null);

  const currentTab = TABS.find(t => t.key === activeTab);

  useEffect(() => { fetchItems(); }, [activeTab]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  const fetchItems = async () => {
    if (activeTab === 'settings') {
      try {
        const { data } = await axios.get('http://localhost:5000/api/settings');
        setItems(data.cvUrl ? [data] : []); // Just to show count if needed, but we don't list settings
      } catch {
        showToast('Failed to fetch settings', 'error');
      }
      return;
    }

    setFetching(true);
    try {
      const { data } = await axios.get(`http://localhost:5000/api/${activeTab}`);
      setItems(data);
    } catch {
      showToast('Failed to fetch items', 'error');
    } finally {
      setFetching(false);
    }
  };

  const handleImageChange = (file) => {
    if (!file) return;
    setImage(file);
    
    if (file.type === 'application/pdf') {
      setImagePreview('PDF_FILE'); // special identifier for PDF
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file && (file.type.startsWith('image/') || file.type === 'application/pdf')) handleImageChange(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) { showToast(`Please select a ${activeTab === 'settings' ? 'PDF CV' : 'image'}`, 'error'); return; }
    setLoading(true);

    if (activeTab === 'settings') {
      try {
        const uploadData = new FormData();
        uploadData.append('cv', image);
        await axios.post('http://localhost:5000/api/settings/cv', uploadData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        setImage(null);
        setImagePreview(null);
        fetchItems();
        showToast('CV Updated successfully!');
      } catch {
        showToast('CV upload failed', 'error');
      } finally {
        setLoading(false);
      }
      return;
    }

    let imageUrl = '';
    try {
      const uploadData = new FormData();
      uploadData.append('image', image);
      const uploadRes = await axios.post('http://localhost:5000/api/upload', uploadData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      imageUrl = uploadRes.data.imageUrl;
    } catch {
      showToast('Image upload failed', 'error');
      setLoading(false);
      return;
    }

    try {
      const payload = { title: formData.title, description: formData.description, imageUrl };
      if (currentTab.hasLink) payload[currentTab.linkKey] = formData.link;
      if (activeTab === 'certificates') payload.type = certType;
      await axios.post(`http://localhost:5000/api/${activeTab}`, payload);
      setFormData({ title: '', description: '', link: '' });
      setCertType('certificate');
      setImage(null);
      setImagePreview(null);
      fetchItems();
      showToast(`${currentTab.label.slice(0, -1)} added successfully!`);
    } catch {
      showToast('Failed to save item', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (activeTab === 'settings') return; // no delete for CV in this UI yet
    try {
      await axios.delete(`http://localhost:5000/api/${activeTab}/${id}`);
      fetchItems();
      showToast('Deleted successfully');
    } catch {
      showToast('Delete failed', 'error');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans">
      {/* Gradient bg blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      {/* Header */}
      <header className="relative border-b border-white/5 backdrop-blur-xl bg-white/2">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight">Portfolio Admin</h1>
              <p className="text-xs text-slate-500">Content Management Dashboard</p>
            </div>
          </div>
          <a href="/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group">
            <span>View Portfolio</span>
            <svg className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </header>

      <main className="relative max-w-7xl mx-auto px-6 py-10">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {TABS.map(tab => (
            <div key={tab.key} className="bg-white/3 border border-white/5 rounded-2xl p-5 backdrop-blur-sm">
              <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${tab.color} mb-3 shadow-lg`}>
                {tab.icon}
              </div>
              <p className="text-2xl font-bold">{activeTab === tab.key ? items.length : '—'}</p>
              <p className="text-sm text-slate-400 mt-1">{tab.label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 p-1.5 bg-white/3 border border-white/5 rounded-2xl w-fit mb-8 backdrop-blur-sm">
          {TABS.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                ${activeTab === tab.key
                  ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                  : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Upload Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/3 border border-white/5 rounded-3xl p-6 backdrop-blur-sm sticky top-6">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-xl bg-gradient-to-br ${currentTab.color} shadow-md`}>
                  {currentTab.icon}
                </div>
                <div>
                  <h2 className="font-semibold text-base">Add {currentTab.label.slice(0, -1)}</h2>
                  <p className="text-xs text-slate-500">Fill in the details below</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* File Upload (Image or CV) */}
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">
                    {activeTab === 'settings' ? 'Upload PDF CV *' : 'Cover Image *'}
                  </label>
                  {imagePreview ? (
                    <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center h-48">
                      {imagePreview === 'PDF_FILE' ? (
                        <div className="text-center">
                          <svg className="w-12 h-12 text-slate-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          <span className="text-sm font-medium">{image.name}</span>
                        </div>
                      ) : (
                        <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                      )}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button
                          type="button"
                          onClick={() => { setImage(null); setImagePreview(null); }}
                          className="bg-red-500/80 hover:bg-red-500 text-white text-sm px-4 py-2 rounded-xl transition-colors"
                        >
                          Remove File
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      onDrop={handleDrop}
                      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                      onDragLeave={() => setDragOver(false)}
                      className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-200
                        ${dragOver
                          ? `border-[${currentTab.accent}] bg-white/8`
                          : 'border-white/10 hover:border-white/20 hover:bg-white/5'}`}
                    >
                      <div className="text-slate-500 flex flex-col items-center gap-3">
                        <UploadIcon />
                        <div>
                          <p className="text-sm font-medium text-slate-300">Drop {activeTab === 'settings' ? 'PDF' : 'image'} here</p>
                          <p className="text-xs text-slate-500 mt-1">or click to browse • {activeTab === 'settings' ? 'PDF' : 'PNG, JPG, JPEG'}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept={activeTab === 'settings' ? "application/pdf" : "image/*"}
                    onChange={(e) => handleImageChange(e.target.files[0])}
                    className="hidden"
                  />
                </div>

                {activeTab !== 'settings' && (
                  <>
                    {/* Title */}
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder={`Enter ${currentTab.label.slice(0, -1).toLowerCase()} title...`}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Write a brief description..."
                    required
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all resize-none"
                  />
                </div>

                {/* Certificate Type */}
                {activeTab === 'certificates' && (
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Type *</label>
                    <div className="flex gap-2">
                      {['certificate', 'scholarship'].map(t => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setCertType(t)}
                          className={`flex-1 py-2.5 rounded-xl text-sm font-medium capitalize transition-all duration-200 border
                            ${certType === t
                              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 border-transparent text-white shadow-lg'
                              : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'}`}
                        >
                          {t === 'certificate' ? '🏅 Certificate' : '🎓 Scholarship'}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Link (optional) */}
                {currentTab.hasLink && (
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">{currentTab.linkLabel}</label>
                    <input
                      type="url"
                      name="link"
                      value={formData.link}
                      onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                      placeholder="https://..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all"
                    />
                  </div>
                )}
                  </>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 bg-gradient-to-r ${currentTab.color} hover:opacity-90 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed shadow-lg mt-2`}
                >
                  {loading ? (
                    <><Spinner /> Uploading...</>
                  ) : (
                    <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg> {activeTab === 'settings' ? 'Update CV' : `Add ${currentTab.label.slice(0, -1)}`}</>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Items List */}
          <div className="lg:col-span-3">
            {activeTab === 'settings' ? (
               <div className="bg-white/3 border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
                 <h3 className="text-xl font-bold mb-4">Current Settings</h3>
                 <div className="space-y-4">
                   <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center justify-between">
                     <div>
                       <h4 className="font-semibold text-white mb-1">Resume / CV Link</h4>
                       <p className="text-xs text-slate-400">
                         {items.length > 0 && items[0].cvUrl 
                           ? "A CV is currently uploaded and active." 
                           : "No CV uploaded yet. Fallback local CV will be used."}
                       </p>
                     </div>
                     {items.length > 0 && items[0].cvUrl && (
                       <a 
                         href={items[0].cvUrl.replace('/upload/', '/upload/fl_attachment/')} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="flex-shrink-0 px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-400 font-medium text-sm hover:bg-cyan-500/30 transition"
                       >
                         Download Current
                       </a>
                     )}
                   </div>
                 </div>
               </div>
            ) : (
              <>
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold text-base">
                {currentTab.label}
                <span className="ml-2 text-xs bg-white/8 text-slate-400 border border-white/10 px-2.5 py-1 rounded-full">
                  {activeTab === 'certificates' && certFilter !== 'all'
                    ? items.filter(i => i.type === certFilter).length
                    : items.length}
                </span>
              </h2>
              <p className="text-xs text-slate-500">Showing in portfolio as /{currentTab.key}</p>
            </div>

            {/* Certificate Filter Pills */}
            {activeTab === 'certificates' && (
              <div className="flex gap-2 mb-5">
                {['all', 'certificate', 'scholarship'].map(f => (
                  <button
                    key={f}
                    onClick={() => setCertFilter(f)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium capitalize transition-all duration-200 border
                      ${certFilter === f
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 border-transparent text-white shadow-md'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/8'}`}
                  >
                    {f === 'all' ? '🗂 All' : f === 'certificate' ? '🏅 Certificates' : '🎓 Scholarships'}
                  </button>
                ))}
              </div>
            )}

            {fetching ? (
              <div className="flex items-center justify-center py-20 text-slate-500">
                <Spinner />
                <span className="ml-3 text-sm">Loading...</span>
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-20 text-slate-600">
                <div className={`inline-flex p-5 rounded-3xl bg-white/3 border border-white/5 mb-4`}>
                  {currentTab.icon}
                </div>
                <p className="text-sm font-medium text-slate-400">No {currentTab.label.toLowerCase()} yet</p>
                <p className="text-xs mt-1">Use the form to add your first {currentTab.label.slice(0,-1).toLowerCase()}</p>
              </div>
            ) : (
              <div className="space-y-3">
                {(activeTab === 'certificates' && certFilter !== 'all'
                  ? items.filter(i => i.type === certFilter)
                  : items
                ).map((item, index) => (
                  <div
                    key={item._id}
                    className="group flex items-center gap-4 bg-white/3 border border-white/5 rounded-2xl p-4 hover:bg-white/6 hover:border-white/10 transition-all duration-200"
                  >
                    <div className="text-xs font-bold text-slate-600 w-6 text-center flex-shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-white/5 border border-white/10">
                      <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-sm text-white truncate">{item.title}</h3>
                        {item.type && (
                          <span className={`flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full border
                            ${item.type === 'scholarship'
                              ? 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                              : 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30'}`}>
                            {item.type === 'scholarship' ? '🎓 Scholarship' : '🏅 Certificate'}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{item.description}</p>
                      {(item.projectLink || item.courseLink) && (
                        <a
                          href={item.projectLink || item.courseLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ color: currentTab.accent }}
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          View Link
                        </a>
                      )}
                    </div>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="flex-shrink-0 p-2.5 rounded-xl bg-red-500/0 hover:bg-red-500/15 text-slate-500 hover:text-red-400 transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <TrashIcon />
                    </button>
                  </div>
                ))}
              </div>
            )}
            </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
