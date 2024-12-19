import React, { useState, useEffect } from "react";
import { fetchData, addData, deleteData } from "../Api/api";

const StudentModule = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ firstName: "", lastName: "", studentNumber: "", major: "" });

  useEffect(() => {
    fetchData("students").then(setStudents);
  }, []);

  const handleAddStudent = () => {
    addData("students", newStudent).then((student) => setStudents([...students, student]));
    setNewStudent({ firstName: "", lastName: "", studentNumber: "", major: "" });
  };

  const handleDeleteStudent = (id) => {
    deleteData("students", id).then(() => setStudents(students.filter((s) => s.id !== id)));
  };

  return (
    <div>
      <h2>Student Management</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.firstName} {student.lastName} ({student.studentNumber}) - {student.major}
            <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="First Name"
        value={newStudent.firstName}
        onChange={(e) => setNewStudent({ ...newStudent, firstName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={newStudent.lastName}
        onChange={(e) => setNewStudent({ ...newStudent, lastName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Student Number"
        value={newStudent.studentNumber}
        onChange={(e) => setNewStudent({ ...newStudent, studentNumber: e.target.value })}
      />
      <input
        type="text"
        placeholder="Major"
        value={newStudent.major}
        onChange={(e) => setNewStudent({ ...newStudent, major: e.target.value })}
      />
      <button onClick={handleAddStudent}>Add Student</button>
    </div>
  );
};

export default StudentModule;
