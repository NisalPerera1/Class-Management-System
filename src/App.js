import './App.css';
import React from 'react';
import './App.css';
import Navbar from './frontend/components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Classes from './frontend/components/pages/classes/classes';
import Home from './frontend/components/pages/home/home';
import Getstudent from './frontend/components/pages/student/getstudent';
import Addstudent from './frontend/components/pages/student/createstudent';
import Editstudent from './frontend/components/pages/student/editstudent';
import Register from './frontend/components/pages/login/registration'; 
import Login from './frontend/components/pages/login/Login';
import Contact from './frontend/components/pages/contact/contact';
import About from './frontend/components/pages/about/about';
import Papers from './frontend/components/pages/papers/SelectGrade'




function App() {
  return (
  <div>
  
    
    <Router>
			<Navbar align="center"/>
			<Routes>
				<Route path='/register' element={<Register/>} />
				<Route path='/' exact element={<Login/>} />
				<Route path='/home'  element={<Home/>} />
				<Route path='/about' element={<About/>} />
				<Route path='/classes' element={<Classes/>} />
				<Route path='/contact' element={<Contact/>} />
        		<Route path='/papers' element={<Papers/>} />
        		<Route path='/students' element={<Getstudent/>} />
        		<Route path='/student/add' element={<Addstudent/>} />
				<Route path="update/:id" element={<Editstudent />} />

			</Routes>
			</Router>
   </div>

 
  
  
  );
}

export default App;
