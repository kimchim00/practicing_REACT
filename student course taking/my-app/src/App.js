import React from "react";
import StudentModule from "./Components/StudentModule";
import CourseModule from "./Components/CourseModule";
import InstructorModule from "./Components/InstructorModule";
import EnrollmentModule from "./Components/EnrollmentModule";
import "./App.css";
function App() {
  return (
    <div className="App">
      <h1>University Management System</h1>
      <StudentModule />
      <CourseModule />
      <InstructorModule />
      <EnrollmentModule />
    </div>
  );
}

export default App;
