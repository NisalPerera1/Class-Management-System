import React from "react"; 
import Button from '@mui/material/Button';
import pic from './1.jpg';
  
 export default function Home(){
    return<div>
             <h1 className="header" align="Center">Nisal Perera </h1>
        <div>
        <section id='home' className='min-h-screen text-center mt-4 flex flex-col justify-center '/>
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-56 h-56 relative overflow-hidden md:h-96 md:w-96 mb-2">
         <div id='image' align='center' >
         <img src={pic} layout="fill" height={300} weight={1234} align="center" />

         </div>
        </div>
        <h3 align='center' className='text-xl md:text-2xl'>IT Student | Maths Tutor | Freelancer</h3>
        <p className='text-md py-1 text-gray-800 md:text-xl' align='center'>Enthusiastic and motivated self-learning about information technology. Focused on cloud computing, devsecops, and web development. Now I am looking for more experience in my field. </p>
        <div className='text-5xl py-4 flex justify-center gap-16 text-gray-600'>
       
       
       
        </div>
        </div>
        </div>
       
    
}
<button></button>