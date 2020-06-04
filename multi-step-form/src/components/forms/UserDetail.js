import React, {useState} from 'react'
import Navbar from '../layouts/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, CssBaseline, Container, Button, ButtonGroup} from '@material-ui/core';

const UserDetails = (props) => {
    const [userInput, setUserInput] = useState(props.input);


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
       }
    }));
    const classes = useStyles();
    const stepNext = (e) => {
        e.preventDefault();
        props.stepNext();
    }

    const onChange = e => {
        setUserInput({
            ...userInput,
            [e.target.name]:e.target.value
        })
        props.changeInput(e.target.name, e.target.value);
    }

  return (
    <>  
      <Navbar title="Enter User Details"/>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.Container}>
        <TextField
            onChange={onChange}
            value={userInput.firstName}
            name="firstName"
            placeholder="Enter your First Name" 
            label="First Name"
            className={classes.input}    
        />
        <TextField
            onChange={onChange}
            value={userInput.lastName}
            name="lastName"
            placeholder="Enter your Last Name" 
            label="Last Name"
            className={classes.input}    
        />
        <TextField
            onChange={onChange}
            value={userInput.email}
            name="email"
            placeholder="Enter your Email" 
            label="Email"
            className={classes.input}    
        />
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button onClick={stepNext}>Continue</Button>
        </ButtonGroup>
      </Container>
    </>
  )
}

export default UserDetails
