import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Classes from './pages/classes';
import Feereport from './pages/feereport';
import Students from './pages/students';
import { createChainedFunction } from '@mui/material';
import { Component } from 'react'
import axios from 'axios';






export default class App extends Component {
	constructor(props){
		super(props);
		this.state={
		  posts:[]
		};
	  }


	//okkoma pages subcomponents render unata passe mount func eka exe wenawa
	componentDidMount(){
	  this.retrievePosts();
	}
	//data ganna yanne port eken
	  retrievePosts(){
		axios.get('http://localhost:8000/posts').then(res=>{
		  if (res.data.success){
			this.setState({
			  posts:res.data.existingPosts
			});
	console.log(this.state.posts)
		  }
		});
	  }

  render() {
	return (
		<div>
			<div>
			{this.state.posts.map(posts=>(
				<div>
<p>{posts.Student_Name}</p>	
				<p>{posts.Student_Age}</p>	
				<p>{posts.Student_Gender}</p>	
				
				</div>
				
			
			)
			)}</div>
			
				
			

			<Router>
			<Navbar/>
			<Routes>
				<Route path='/' exact element={<Home/>} />
				<Route path='/about' element={<About/>} />
				<Route path='/students' element={<Students/>} />
				<Route path='/feereports' element={<Feereport/>} />
				<Route path='/classes' element={<Classes/>} />
			
			</Routes>
			</Router>

	
			
			
			
		</div>
		)};

			
	
  };

	