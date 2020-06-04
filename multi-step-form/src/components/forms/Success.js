import React from 'react'
import Navbar from '../layouts/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline,Typography, Container} from '@material-ui/core';
import lightGreen from '@material-ui/core/colors/lightGreen';

const Confirm = (props) => {
  const primary = lightGreen[500];
    const useStyles = makeStyles((theme) => ({
        Container:{
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            alignItems:'center',
            padding: '1em 1em',
            maxWidth: '100%',
            color: primary
        }
     }));
     const classes = useStyles();
  return (
    <>
      <Navbar title="Success"/>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.Container}>
        <Typography variant="h4" gutterBottom>
            Thank You for your Submission !
        </Typography>
        <Typography variant="h5" gutterBottom>
            You will get an email with further details
        </Typography>
      </Container>
    </>
  )
}

export default Confirm
