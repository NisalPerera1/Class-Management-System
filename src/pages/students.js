import React from "react";
import Button from '@mui/material/Button';
import { useState } from 'react';
import { CenterFocusStrong } from "@mui/icons-material";



  function Students(){
    const[Students, setStudents]=useState(false);
    const toggleModal=()=>{
        setStudents(!Students);
         };

    if(Students){
    document.body.classList.add('active-modal')
            }
    else{
    document.body.classList.remove('active-modal')
        }

return ( 
          <>
         <div> 
          <h2 align="center">Here is Your Students' Details Upto Now</h2></div>
          `   <div>
            
            <div id="Buton" >    
        <Button className="btn-Modal" variant="contained" onClick={toggleModal}> Add New Student </Button>
		<p></p>
		<Button className="btn-Modal" variant="contained" onClick={toggleModal}> Show All Student </Button>
         </div>
            </div>
         
      {Students && (
<div className="Modal">
<div onClick={toggleModal} className="overlay"></div>  
  <div className="Modal-content">
      <h2> Enter The Student's Credintials </h2>
      <form>

      <label>Enter Student Name :
        <input type="text" />
        </label><br></br><br></br>

        <label>Enter Student Age :
        <input type="text-area" />
        </label><br></br><br></br>

        <label>Enter Student Gender :
        <input type="text-area" />
        </label><br></br><br></br>

        <label>Enter Student Grade :
        <input type="text-area" />
        </label><br></br><br></br>

        <label>Enter Student Adress:
        <input type="text" />
        </label>
        
    </form><br></br>
      <Button className="close-modal" color="error" variant= "outlined" onClick={toggleModal}>CLOSE</Button>
      <></>
      <Button className="close-modal" variant="outlined" type="submit">Submit</Button>
          </div>
        </div>
      )}

   </>
  );
};
   export default Students;