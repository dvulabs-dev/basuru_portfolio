import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectCard = ({ number, title, description, link, imageUrl }) => (
    <div className="relative p-8 rounded-2xl border border-neon/30 hover:border-neon transition duration-300 bg-white/5 hover:bg-white/10 group overflow-hidden">
        <div className="absolute -top-6 left-8 bg-dark px-4 text-4xl font-bold text-neon font-outline-2 z-10">
            {number}
        </div>
        {imageUrl && (
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-xl mb-4" />
        )}
        <h3 className="mt-4 text-xl font-bold text-white mb-4 relative z-10">
            {title}
        </h3>
        <p className="text-slate-400 mb-6 relative z-10">
            {description}
        </p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-neon font-bold text-sm uppercase tracking-wider hover:underline relative z-10">
            View Details &rarr;
        </a>
    </div>
);

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/projects');
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };
        fetchProjects();
    }, []);

    return (
        <section id="projects" className="py-20 bg-gradient-to-b from-dark to-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-20 uppercase tracking-wider">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {projects.length > 0 ? (
                        projects.map((project, index) => (
                            <ProjectCard
                                key={project._id}
                                number={String(index + 1).padStart(2, '0')}
                                title={project.title}
                                description={project.description}
                                link={project.projectLink || '#'}
                                imageUrl={project.imageUrl}
                            />
                        ))
                    ) : (
                        <p className="text-center text-white col-span-3">No projects found. Add some from the admin dashboard.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;
