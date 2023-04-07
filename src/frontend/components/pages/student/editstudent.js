import React, { useState, useEffect } from "react";
import axios from "axios";

export default function EditStudent(props) {

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
    const result = await axios.get(`http://localhost:8070/student/${props.match.params.id}`)
    const { student } = result.data;
        setName(student.name);
        setAddress(student.address);
        setAge(student.age);
        setGender(student.gender);
      };

      fetchStudents();
    }, [props.match.params.id]);
 

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const updatedStudent = {
      name,
      address,
      age,
      gender,
    };
    
    axios
      .put(`http://localhost:8070/Student/update/${props.match.params.id}`, updatedStudent)
      .then(() => {
        alert("Student updated in the database");
      })
      .catch(() => {
        alert("Sorry, Student update failed");
      });
  };

  return (
    <div>
      <form className="container" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            className="form-control"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <input
            type="text"
            className="form-control"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}
