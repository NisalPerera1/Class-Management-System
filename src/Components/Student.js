import React from "react";
import Button from '@mui/material/Button';
import { useState } from 'react';
import AllStu from "./Current S/AllStu";



  
  function Modal(){
    const[Modal, setModal]=useState(false);
    const toggleModal=()=>{
        setModal(!Modal);
         };

    if(Modal){
    document.body.classList.add('active-modal')
            }
    else{
    document.body.classList.remove('active-modal')
        }

return ( 
          <>
         <div> 
          <h2 align="center">Hello Nisal Perera, Here is Your Students' Details Upto Now</h2></div>
          `   <div>
            <AllStu/>
            <div>    
        <Button className="btn-Modal" variant="contained" onClick={toggleModal}> Add New Student </Button>
         </div>
            </div>
         
      {Modal && (
<div className="Modal">
<div onClick={toggleModal} className="overlay"></div>  
  <div className="Modal-content">
      <h2> Enter The Student's Credintials </h2>
      <form>

      <label>Enter Student Name :
        <input type="text" />
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
   export default Modal;
