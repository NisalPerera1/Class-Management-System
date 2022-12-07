import './App.css';
import Home from './Components/Home';
import { BrowserRouter } from "react-router-dom";
import Student from './Components/Student';
import { BrowserRouter as Router,Switch,Redirect, Routes, Route,Navigate } from "react-router-dom";
//import NavBar from './Components/NavBar';
import LineChart from './Components/LineChart';


function App() {
  return (
   
   <div>
    <Student/>
  
    
   </div> 
  );
}

export default App;