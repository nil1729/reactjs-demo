import React from 'react';

const d = new Date();
const timeH = d.getHours();
let greeting;
let greetingColor;
if(timeH>=0  && timeH<12){
	greeting = 'Morning';
	greetingColor = 'green';
}
else if(timeH>=12 && timeH<19){
	greeting = 'Afternoon';
	greetingColor = 'orange';
}
else{
	greeting = 'Night';
	greetingColor = 'black';
}

function Greeting(){
	return (
		<span style={{color: greetingColor}}>
		 Good {`${greeting}`}
		</span>	
		)
}

export default Greeting;