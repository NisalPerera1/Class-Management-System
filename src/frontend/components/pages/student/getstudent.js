import React from "react";
import "./getstu.css"
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

export default function Getstudent(){
    const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await axios.get('http://localhost:8070/students');
      setStudents(response.data);
    };
    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8070/students/${id}`);
      const updatedStudents = students.filter((student) => student._id !== id);
      setStudents(updatedStudents);
    } catch (err) {
      console.log(err);
    }
  };
  
    
    return(
        <div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
        <a href="student/add" className="btn-Modal btn-primary">Add New Student</a>        
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
        <h4>Here is your Students</h4>
        </div>
<div>
<table className="table table-striped" border={4}>
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Address</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td>{student._id}</td>
                <td>{student.name}</td>
                <td>{student.address}</td>
                <td>{student.gender}</td>
                <td>{student.age}</td>
                <td>
                  <Link to={`/update/${student._id}`}> <Button variant='contained' style={{ backgroundColor: 'blue', color: 'white' }}>Edit</Button></Link>
                  <Button variant='contained'style={{ backgroundColor: 'red', color: 'white' }}onClick={() => handleDelete(student._id)}> Delete</Button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
</div>

        </div>
        
    )
}
