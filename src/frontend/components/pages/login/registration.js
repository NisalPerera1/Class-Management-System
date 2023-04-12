import React, { useState } from 'react';
import axios from 'axios';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBRadio } from 'mdb-react-ui-kit';
import './register.css';

export default function Register() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [grade, setGrade] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      name,
      address,
      email,
      password,
      grade,
      age,
      gender,
    };

    // backend posting
    axios.post("http://localhost:8070/users/register", newUser)
      .then(() => {
        alert('Successfully Registered');
      })
      .catch(() => {
        alert('Sorry, Something Went wrong!!!');
      });
  };

  return (
    <div>
      <form className="container" onSubmit={handleFormSubmit}>
        <MDBContainer fluid>
          <MDBRow className='justify-content-center align-items-center m-5'>
            <MDBCard>
              <MDBCardBody className='px-4'>
                <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>

                <MDBRow>
                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' placeholder='Your Name' size='lg' id='form2' type='text' onChange={(e) => setName(e.target.value)} />
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' placeholder='Address' size='lg' id='form3' type='text' onChange={(e) => setAddress(e.target.value)} />
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' placeholder='Email' size='lg' id='form4' type='email' onChange={(e) => setEmail(e.target.value)} />
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' placeholder='Password' size='lg' id='form5' type='password' onChange={(e) => setPassword(e.target.value)} />
                  </MDBCol>

                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' placeholder='Confirm Password' size='lg' id='form6' type='password' />
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' placeholder='Grade' size='lg' id='form7' type='rel' onChange={(e) => setGrade(e.target.value)} />
                  </MDBCol>

                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' placeholder='Age' size='lg' id='form8' type='rel' onChange={(e) => setAge(e.target.value)} />
                  </MDBCol>
                </MDBRow>

                <MDBCol md='6' className='mb-4'>
                <MDBInput wrapperClass='mb-4' placeholder='Enter Your Gender' size='lg' id='form8' type='rel' onChange={(e) => setGender(e.target.value)} />
                  </MDBCol>
               
            
            <MDBBtn className='mb-4' size='lg' type='submit'>Submit</MDBBtn>

            <div className='container'>
                    <h6 style={{ display: 'inline-block' }}>Already Have an Account?</h6>
                     <MDBBtn  style={{ display: 'inline-block', marginLeft: '10px' }} type="primary" href='/'>Login</MDBBtn >
            </div>

            
          </MDBCardBody>
        </MDBCard>

      </MDBRow>
    </MDBContainer>
    </form>
    </div>

  );
};
