import React from "react";
import "./courses.css";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";

const Courses = () => {
  const { courses } = CourseData();

  return (
    <section className="courses-modern">
      <div className="courses-wrapper">
        <h2>Explore Our Courses</h2>
        <p className="subtitle">
          Learn from industry experts and build real-world skills
        </p>

        <div className="course-grid">
          {courses && courses.length > 0 ? (
            courses.map((e) => <CourseCard key={e._id} course={e} />)
          ) : (
            <div className="empty-state">No Courses Available Yet</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Courses;