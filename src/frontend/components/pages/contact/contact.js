import React, { useState } from 'react';
import "./Contact.css";
import axios from 'axios';

function Contact() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [subject,setSubject]=useState("");
  const [message,setMessage]=useState("");

function sendmail(e){
  e.preventDefault();
  const newMail={
    name,
    email,
    subject,
    message
  }
//axios use kare function eka athule 
  axios.post('http://localhost:8070/send-email', newMail).then(()=>{
    alert("Contacting Succesfull")}
  )

  .catch(()=>{
    alert("Sorry Contacting Failed")
  })

}

  return (<div>
<div className="contactfullpage">
<div className="background">

<div class="contact-header">
<h1  id='head' align="center">Contact Me</h1>
</div>
<div className="form" class="container">
<form onSubmit={sendmail}>

<div class="form" id="form">
<label for="name">Name</label>
<input
type="name"
name="name"
class="form-control"
id="name"
placeholder="Enter your name"
onChange={(e)=>{
  setName(e.target.value);
            }}
/>
</div>


<div class="form-group">
<label for="email">Email address</label>
<input
type="email"
name="email"
class="form-control"
id="email"
placeholder="Enter your E-mail"
onChange={(e)=>{
  setEmail(e.target.value);
            }}
/>
</div>

<div class="form-group">
<label for="subject">Subject</label>
<input
type="text"
name="subject"
class="form-control"
id="subject"
placeholder="Enter E-mail Subject"
onChange={(e)=>{
  setSubject(e.target.value);
            }}
/>
</div>

<div class="form-group">
<label for="email_body">Message</label>
<textarea
class="form-control"
id="email_body"
rows="5"
onChange={(e)=>{
  setMessage(e.target.value);
            }}
></textarea>
</div>

<button type="submit" class="btn btn-primary">
Submitt
</button>
</form>
</div>

<div class="para">
<p1 id="para">Knowing the opinion of our customers is very important to me, I extend the invitation to fill out our form 
to request information about the services I offer.</p1>

<div class="para">
<p1 id="para">
As soon as possible, I will attend your request.
  </p1>

  </div>

</div>
</div>


</div>                      
  </div>
  
  );
}

export default Contact;