import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CourseCard = ({ title, description, link, imageUrl }) => (
    <div className="relative p-8 rounded-2xl border border-neon/30 hover:border-neon transition duration-300 bg-white/5 hover:bg-white/10 group overflow-hidden">
        {imageUrl && (
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-xl mb-4" />
        )}
        <h3 className="mt-4 text-xl font-bold text-white mb-4 relative z-10">
            {title}
        </h3>
        <p className="text-slate-400 mb-6 relative z-10">
            {description}
        </p>
        {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-neon font-bold text-sm uppercase tracking-wider hover:underline relative z-10">
                View Course &rarr;
            </a>
        )}
    </div>
);

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/courses');
                setCourses(data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };
        fetchCourses();
    }, []);

    return (
        <section id="courses" className="py-20 bg-gradient-to-b from-dark to-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16 uppercase tracking-wider">
                    Courses
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {courses.length > 0 ? (
                        courses.map((course) => (
                            <CourseCard
                                key={course._id}
                                title={course.title}
                                description={course.description}
                                link={course.courseLink || '#'}
                                imageUrl={course.imageUrl}
                            />
                        ))
                    ) : (
                        <p className="text-center text-white col-span-3">No courses found. Add some from the admin dashboard.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Courses;
