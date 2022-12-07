import React from "react";
import pic from '../Components/1.jpg';
import Button from '@mui/material/Button';

import { Form } from "react-router-dom";
import { useForm } from 'react-hook-form';

function Student(){
    return <div>
        
           <div>   
       <h1>Hello Nisal, Here is Your Class Student Details.</h1> 
          </div>
    

        <p>To View Current Students, Click 
          <div><Button variant="contained" align ="center" size="45">Show Student</Button></div>
        </p>
    

        <div>
    <Button variant="contained" align ="center" size="45">Add New Student</Button>
        </div>


        <div>
          <form>
            <label>Enter your name:
            <input type="text" />
           </label>
         </form>
        </div>



     </div>
       



       
      
    };
    export default Student;