import React, {useState} from 'react'
import Navbar from '../layouts/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, CssBaseline, Container, Button} from '@material-ui/core';

const PersonalDetail = (props) => {

    const [personalInput, setPersonalInput] = useState(props.input);


    const useStyles = makeStyles((theme) => ({
       Container:{
           display:'flex',
           justifyContent:'center',
           flexDirection:'column',
           alignItems:'center',
           padding: '1em 1em',
       },
       input:{
           width:'25rem',
           margin:'1.3em 0'
       },
       btnGrp:{
           width: '20rem',
           display: 'flex',
           justifyContent:'space-around'
       }
    }));
    const classes = useStyles();
    const stepNext = (e) => {
        e.preventDefault();
        props.stepNext();
    }
    const stepPrev = (e) => {
        e.preventDefault();
        props.stepPrev();
    }

    const onChange = e => {
        setPersonalInput({
            ...personalInput,
            [e.target.name]:e.target.value
        })
        props.changeInput(e.target.name, e.target.value);
    }



  return (
    <>  
      <Navbar title="Enter Personal Details"/>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.Container}>
        <TextField
            onChange={onChange}
            name="occupation"
            value={personalInput.occupation}
            placeholder="Enter your Occupation" 
            label="Occupation"
            className={classes.input}    
        />
        <TextField
            onChange={onChange}
            name="city"
            value={personalInput.city}
            placeholder="Enter your City" 
            label="City"
            className={classes.input}    
        />
        <TextField
            onChange={onChange}
            name="bio"
            value={personalInput.bio}
            placeholder="Enter your Bio" 
            label="Bio"
            className={classes.input}    
        />
        <div className={classes.btnGrp} >
            <Button variant="contained" onClick={stepPrev}>Back</Button>
            <Button variant="contained" color="primary" onClick={stepNext}>Continue</Button>
        </div>
      </Container>
    </>
  )
}

export default PersonalDetail
