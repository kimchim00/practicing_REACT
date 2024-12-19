import React, { useState, useEffect } from "react";
import { fetchData, addData } from "../Api/api";

const EnrollmentModule = () => {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const [selectedCourses, setSelectedCourses] = useState([]);

  useEffect(() => {
    fetchData("students").then(setStudents);
    fetchData("courses").then(setCourses);
  }, []);

  const handleEnroll = () => {
    const enrollment = { studentId: parseInt(selectedStudentId), courses: selectedCourses };
    addData("enrollments", enrollment).then(() => {
      alert("Enrollment successful!");
      setSelectedStudentId("");
      setSelectedCourses([]);
    });
  };

  return (
    <div>
      <h2>Enrollment Management</h2>
      <div>
        <label>
          Select Student:
          <select value={selectedStudentId} onChange={(e) => setSelectedStudentId(e.target.value)}>
            <option value="">--Select Student--</option>
            {students.map((student) => (
              <option key={student.id} value={student.id}>
                {student.firstName} {student.lastName}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Select Courses:
          <select
            multiple
            value={selectedCourses}
            onChange={(e) => setSelectedCourses([...e.target.selectedOptions].map((o) => o.value))}
          >
            {courses.map((course) => (
              <option key={course.id} value={course.code}>
                {course.name} ({course.code})
              </option>
            ))}
          </select>
        </label>
      </div>
      <button onClick={handleEnroll}>Enroll</button>
    </div>
  );
};

export default EnrollmentModule;
