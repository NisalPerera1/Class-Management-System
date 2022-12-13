import React from "react"; 
import Button from '@mui/material/Button';
import {Doughnut} from 'react-chartjs-2';
import "./Home.css";
import { borderRadius, height } from "@mui/system";


          
const state = {
    labels: ['Grade 06','Grade 07','Grade 08','Grade 09','Grade 10','Grade 11',],
    datasets: [
      {
        label: 'Class',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4'
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F'
        ],
        data: [65, 59, 80, 81, 56],
        width: 30,
        height: 30,
  innerRadiusOffset: 11,
        innerRadiusOffset: -420,
      }
    ]
  }
  
function Home(){
    return<div>
             <h1 className="header" align="Center">Nisal Here is Your Class Details </h1>
        <div><br></br>

            <Button variant="contained">Total Students</Button>
            <div>

        <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Classes per month',
              fontSize:10
            },
            legend:{
              display:true,
              width: 30,
              height: 30
              
            }
          }}
        />
      </div>
    
  

            </div>
        <div id="textarea"></div>
        <h1 align="center">Monthly Class Fees Status</h1>
        </div>
        
     
        
  
}
export default Home;