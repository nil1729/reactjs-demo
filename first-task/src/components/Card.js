import React from 'react';
import Image from './Image';


function Card(props){
	return (
	<>
    <div className="card">
            <Image 
                src={props.imgSrc}
             />
            <div className="about">
                <h4>{props.channel}</h4>
                <h3>{props.title}</h3>
                <a target="_blank" rel="noopener noreferrer" href={props.link}>Watch Now</a>
            </div>
        </div>
	</>
    )
}

export default Card;