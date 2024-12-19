import React, { useState, useEffect } from "react";
import { fetchData, addData, deleteData } from "../Api/api";

const InstructorModule = () => {
  const [instructors, setInstructors] = useState([]);
  const [newInstructor, setNewInstructor] = useState({ firstName: "", lastName: "", employeeNumber: "", coursesTaught: [] });

  useEffect(() => {
    fetchData("instructors").then(setInstructors);
  }, []);

  const handleAddInstructor = () => {
    addData("instructors", newInstructor).then((instructor) => setInstructors([...instructors, instructor]));
    setNewInstructor({ firstName: "", lastName: "", employeeNumber: "", coursesTaught: [] });
  };

  const handleDeleteInstructor = (id) => {
    deleteData("instructors", id).then(() => setInstructors(instructors.filter((i) => i.id !== id)));
  };

  return (
    <div>
      <h2>Instructor Management</h2>
      <ul>
        {instructors.map((instructor) => (
          <li key={instructor.id}>
            {instructor.firstName} {instructor.lastName} ({instructor.employeeNumber}) - Courses: {instructor.coursesTaught.join(", ")}
            <button onClick={() => handleDeleteInstructor(instructor.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="First Name"
        value={newInstructor.firstName}
        onChange={(e) => setNewInstructor({ ...newInstructor, firstName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={newInstructor.lastName}
        onChange={(e) => setNewInstructor({ ...newInstructor, lastName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Employee Number"
        value={newInstructor.employeeNumber}
        onChange={(e) => setNewInstructor({ ...newInstructor, employeeNumber: e.target.value })}
      />
      <input
        type="text"
        placeholder="Courses Taught (comma separated)"
        value={newInstructor.coursesTaught.join(", ")}
        onChange={(e) =>
          setNewInstructor({ ...newInstructor, coursesTaught: e.target.value.split(",").map((c) => c.trim()) })
        }
      />
      <button onClick={handleAddInstructor}>Add Instructor</button>
    </div>
  );
};

export default InstructorModule;
