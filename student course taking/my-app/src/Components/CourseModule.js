import React, { useState, useEffect } from "react";
import { fetchData, addData, deleteData } from "../Api/api";



const CourseModule = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ name: "", code: "", credits: 0, instructorId: "" });

  useEffect(() => {
    fetchData("courses").then(setCourses);
  }, []);

  const handleAddCourse = () => {
    addData("courses", newCourse).then((course) => setCourses([...courses, course]));
    setNewCourse({ name: "", code: "", credits: 0, instructorId: "" });
  };

  const handleDeleteCourse = (id) => {
    deleteData("courses", id).then(() => setCourses(courses.filter((c) => c.id !== id)));
  };

  return (
    <div>
      <h2>Course Management</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {course.name} ({course.code}) - {course.credits} credits
            <button onClick={() => handleDeleteCourse(course.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Course Name"
        value={newCourse.name}
        onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Course Code"
        value={newCourse.code}
        onChange={(e) => setNewCourse({ ...newCourse, code: e.target.value })}
      />
      <input
        type="number"
        placeholder="Credits"
        value={newCourse.credits}
        onChange={(e) => setNewCourse({ ...newCourse, credits: parseInt(e.target.value) })}
      />
      <input
        type="text"
        placeholder="Instructor ID"
        value={newCourse.instructorId}
        onChange={(e) => setNewCourse({ ...newCourse, instructorId: e.target.value })}
      />
      <button onClick={handleAddCourse}>Add Course</button>
    </div>
  );
};

export default CourseModule;
