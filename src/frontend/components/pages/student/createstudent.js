import React, { useState } from "react";
import axios from "axios";

export default function Addstudent() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newStudent = {
      name,
      address,
      age,
      gender
    }

   // backend posting
axios.post("http://localhost:8070/Student/add", newStudent)
.then(() => {
  alert("Student saved in the database");
})
.catch(() => {
  alert("Sorry, Student save failed");
});


  }

  return (
    <div>
      <form className="container" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Student's Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter Student's Address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            className="form-control"
            id="age"
            placeholder="Enter Student's Age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <input
            type="text"
            className="form-control"
            id="gender"
            placeholder="Enter your Gender"
            onChange={(e) => setGender(e.target.value)}
          />
        </div><br></br>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
