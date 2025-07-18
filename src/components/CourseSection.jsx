import React, { useState } from 'react';
import CourseCard from './CourseCard.jsx'; // Adjust path if needed
import courses from '../data/courses.json';
import '../App.css'; // CSS for .course-grid layout

const CourseSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const sectionStyle = {
    padding: '40px 20px',
    backgroundColor: '#fff',
    textAlign: 'center',
  };

  const buttonWrapperStyle = {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
  };

  const buttonStyle = {
    padding: '10px 24px',
    border: '1px solid #000',
    borderRadius: '8px',
    backgroundColor: '#fff',
    fontFamily: 'Tahoma',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '0.95rem',
  };

  const filteredCourses =
    activeFilter === 'All'
      ? courses
      : courses.filter((course) => course.category === activeFilter);

  return (
    <section style={sectionStyle}>
      <h2
        style={{
          fontSize: '2.3rem',
          fontWeight: 'bold',
          marginBottom: '30px',
          fontFamily: 'Tahoma',
        }}
      >
        Explore Our Course
      </h2>

      {/* Filter Buttons */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          marginBottom: '30px',
          flexWrap: 'wrap',
        }}
      >
        {['All', 'AI', 'Data Science', 'Web Development'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            style={{
              padding: '8px 16px',
              border: 'none',
              borderRadius: '20px',
              backgroundColor:
                activeFilter === filter ? '#4a6cf7' : '#f0f0f0',
              color: activeFilter === filter ? '#fff' : '#333',
              fontFamily: 'Tahoma',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '0.9rem',
              transition: 'all 0.3s ease',
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Responsive Grid of Course Cards */}
      <div className="course-grid">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {/* Button Below Grid */}
      <div style={buttonWrapperStyle}>
        <button style={buttonStyle}>Explore Free Courses</button>
      </div>
    </section>
  );
};

export default CourseSection;
