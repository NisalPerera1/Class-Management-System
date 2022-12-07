import React from "react";

import Button from '@mui/material/Button';
import { Form } from "react-router-dom";
//import { useForm } from 'react-hook-form';
//<Button >Show Students</Button>
import { useState } from 'react';


  
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
            <div>
            <div>
              <h1>
                Here is your Student Page
              </h1>
            </div>
            <div> <p id="add">
              
        <Button className="btn-Modal" variant="contained" align ="center" size="45" onClick={toggleModal}> Add New Student </Button>
         </p></div>

         <div> <p id="show">
            
              <Button className="Show-Modal" variant="contained" align ="center" size="45"> Show Students </Button>
          `   </p>`</div>





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
 









    
    </form>

      <button className="close-modal"  onClick={toggleModal}>
              
              CLOSE
            </button>
          </div>
        </div>
      )}

   </>
  );
};
   export default Modal;
