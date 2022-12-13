import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/feereport';
import Students from './pages/students';



function App() {
return (
	<Router>
	<Navbar/>
	<Routes>
		<Route path='/' exact element={<Home/>} />
		<Route path='/about' element={<About/>} />
		<Route path='/students' element={<Students/>} />
		
	
	</Routes>
	</Router>
);
}

export default App;
