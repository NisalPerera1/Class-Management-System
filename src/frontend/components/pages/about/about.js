import React from 'react';
import {AiFillLinkedin, AiFillGithub, AiFillMail, AiFillEnvironment, AiFillPhone} from 'react-icons/ai';
import pic from './1.jpg';
import Button from '@mui/material/Button';


const About = () => {

function linkdein (){
       window.open("https://www.linkedin.com/in/nisal-perera-0a2515210/")
}
function github (){
       window.open("https://github.com/NisalPerera1")
}


function email (){
       window.open("mailto:nisaldilesh14@gmail.com");
}

return (<div>


<div className='Icons' class="container" style={{ position: 'absolute',left:'1000px', right:'545px', top: '102px', } }>
   <div ><AiFillEnvironment size={50}/> 136/A Pamabla, Kakkapalliya </div>
   <div><AiFillPhone size={50}/> +94 76 96 50 618 </div>
   <div><AiFillLinkedin  size={50}  onClick={linkdein}/><Button onClick={linkdein}>linkedin</Button> </div>
   <div><AiFillGithub size={50} onClick={github}/> <Button onClick={github}>Github</Button> </div>
   <div><AiFillMail size={50} onClick={email}/><Button onClick={email}>Email</Button> </div>
   </div>
 <div>  
 <div id='image' align='left' >
  <img src={pic} layout="fill" height={300} weight={1234} align="relative" alt='' style={{position: 'relative',left:'50px'}}/>
  </div>

 

<p align='center'>
   Enthusiastic and motivated self-learning about information technology. Focused on Web Developing,Fullstack Developing ,Software Engineering, and web development. Now I am looking for more experience in my field. 
   I'm a self-learning, Adaptable and Enthusiastic Person. Student of Institute of Technology University of Moratuwa. 
   A Second-Year Student of NDT IT.</p>   </div>
 </div>



   
   
)};export default About;
