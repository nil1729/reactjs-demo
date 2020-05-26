import React from 'react';
import spinner from './Spinner.gif';
const Spinner = () => {
  return (
        <img
            style={loaderStyle()}
            className="loader" 
            alt="LOADER"
            src={spinner}
        />
  )
}

const loaderStyle = ()=>{
    return {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '88888'
    }
}
export default Spinner
