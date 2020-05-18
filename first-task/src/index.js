import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ReactDOM.render(
// 	<>
// 	<h1>Chalange-1</h1>
// 	<p> My Name is Nilanjan Deb </p>
// 	<ol>
// 	<li>Netflix-1</li>
// 	<li>Netflix-2</li>
// 	<li>Netflix-3</li>
// 	<li>Netflix-4</li>
// 	<li>Netflix-5</li>
// 	</ol>
// 	</>,
// 	document.getElementById('root'));

// const name = "nilanjan Deb";

// ReactDOM.render(
// 	<>
// 	<h1> my name is {name} </h1>
// 	<p> {Math.random()} </p>	
// 	</>,
// 	document.getElementById('root'));

// const d = new Date();
// const time = d.toLocaleTimeString();
// const date = d.toLocaleDateString();
// const name = "Nilanjan Deb"

// ReactDOM.render(
// 	<>
// 	<h1>Chalange-2 </h1>
// 	<h1 className="heading">My Name is {`${name}`}</h1>
// 	<p> Current Date: {`${date}`}</p>
// 	<p> Current Time: {`${time}`}</p>
// 	</>
// 	,document.getElementById('root')); 

// const d = new Date();
// const timeH = d.getHours();
// let greeting;
// let greetingColor;
// if(timeH>=0  && timeH<12){
// 	greeting = 'Morning';
// 	greetingColor = 'green';
// }
// else if(timeH>=12 && timeH<19){
// 	greeting = 'Afternoon';
// 	greetingColor = 'orange';
// }
// else{
// 	greeting = 'Night';
// 	greetingColor = 'black';
// }
// ReactDOM.render(
// 	<>
// 	<h1>Hello Sir, <span style= {{color: `${greetingColor}`}}>Good {`${greeting}`}</span></h1>
// 	</>,
// 	document.getElementById('root')
// 	);

// import App from './App'

// ReactDOM.render(
// 	<>
// 	</>, document.getElementById('root')
// 	);

import App from './App';


ReactDOM.render(<App/>,document.getElementById('root'));

