import React from 'react';


import {AiFillLinkedin, AiFillGithub, AiFillMail, AiFillEnvironment, AiFillPhone} from 'react-icons/ai';
import pic from './1.jpg';


const About = () => {
   

return (<div>
      
                                <div id='image' align='center' >
                              <img src={pic} layout="fill" height={300} weight={1234} align="center" />
                               </div>
      

   <div id ="about-text">

   <p align='center'>
   I'm a self-learning, Adaptable and Enthusiastic Person. Student of Institute of Technology University of Moratuwa. 
   A Second-Year Student of NDT IT.</p>  

   </div>



   
   <h1 className="header"  align="Center">Get In Contact </h1>

   <div className='Icons' align='center'>
          <AiFillLinkedin  size={50}/> 
          <AiFillGithub size={50}/>
         
          <AiFillMail size={50}/>
          <AiFillEnvironment size={50}/>
          <AiFillPhone size={50}/>
          
        </div>
   </div>


   
   
)};export default About;
