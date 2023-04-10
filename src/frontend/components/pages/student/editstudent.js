import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import React, { useState , useEffect} from 'react';


export default function Editstudent() {
  const { id } = useParams();
  const Navigate = useNavigate();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    const fetchStudent = async () => {
      const response = await axios.get(`http://localhost:8070/students/${id}`);
      setName(response.data.name);
      setAddress(response.data.address);
      setGender(response.data.gender);
      setAge(response.data.age);
    };
    fetchStudent();
  }, [id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const student = {
      name: name,
      address: address,
      gender: gender,
      age: age,
    };

    try {
      await axios.put(`http://localhost:8070/students/${id}`, student);
      Navigate.push('/');
    } catch (err) {
alert("updated");
Navigate.push('/'); // Navigate back to student UI


}
  };

  return (
    <div>
      <h3>Edit Student Details</h3>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='gender'>
          <Form.Label>Gender</Form.Label>
          <Form.Control
            type='text'
            placeholder='gender'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='age'>
          <Form.Label>Age</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter Age'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>
<br></br>
        <Button variant='primary' type='submit'> Submit</Button>&nbsp;
        <Button variant='danger' href='/students'> Back</Button>

      </Form>
    </div>
  );
}
