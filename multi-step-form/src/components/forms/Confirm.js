import React, {useState} from 'react'
import Navbar from '../layouts/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, CssBaseline, Typography, Container, Button} from '@material-ui/core';


const Confirm = (props) => {

    const {firstName, lastName, email, bio, occupation, city} = props.input;
    const [confirmDetail] = useState([
        {
            id:1,
            name:'First Name',
            value: firstName
        },
        {
            id:2,
            name:'Last Name',
            value: lastName
        },
        {
            id:3,
            name:'Email',
            value:email
        },
        {
            id:4,
            name:'Occupation',
            value:occupation
        },
        {
            id:5,
            name:'City',
            value:city
        },
        {
            id:6,
            name:'Bio',
            value:bio
        }
    ]);



    const useStyles = makeStyles((theme) => ({
        Container:{
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            alignItems:'center',
            padding: '1em 1em',
        },
        btnGrp:{
            width: '20rem',
            display: 'flex',
            justifyContent:'space-around'
        },
        root: {
            minWidth: 500,
            margin: '2em 0',
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            alignItems:'center',
        },
        pos: {
            textAlign: 'center'
        },
        detailContainer:{
            margin:'1em 0'
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
  return (
    <>
      <Navbar title="Confirm your Details"/>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.Container}>
      <Card className={classes.root}>
      <CardContent>
      {
          confirmDetail.map(detail=>(
              <div key={detail.id} className={classes.detailContainer}>
                <Typography variant="subtitle1" className={classes.pos}>
                    {detail.name}:
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {detail.value}
                </Typography>
              </div>
          ))
        }
        </CardContent>
        </Card>
        <div className={classes.btnGrp} >
            <Button variant="contained" onClick={stepPrev}>Back</Button>
            <Button variant="contained" color="primary" onClick={stepNext}>Confirm & Continue</Button>
        </div>
      </Container>
    </>
  )
}

export default Confirm
