import React, {useState, useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import ResultContext from '../../context/results/resultContext';

const Search = () => {
  const resultContext = useContext(ResultContext);

  const {searchPhotos, clearSearch} = resultContext;

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(15);

  const amounts = [9, 15, 24, 30, 36, 42];


  const onChange = async e => {
    let count = amount;
    if(e.target.name === 'amount'){
      count = e.target.value;
    }
    let q = text;
    if(e.target.name === 'text'){
      q = e.target.value;
    }
    if(q !== ''){
      searchPhotos(q, count);
    }else{
      clearSearch();
    }
  };




  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: '0 1em 0 1em',
    },
    textField:{
      margin: '1em 0 1em 0'
    }
  }));
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        name="text"
        className={classes.textField} 
        fullWidth 
        id="standard-basic" 
        label="Search Photos" 
        onChange={(e)=>{setText(e.target.value);onChange(e)}}
      />
      <TextField
        name="amount"
        style={{width:'15rem'}}
        select
        label="Amount"
        value={amount}
        onChange={(e)=>{setAmount(e.target.value);onChange(e)}}
        helperText="Please select amount"
      >{
        amounts.map(option=>(
          <MenuItem key={option} value={option}>
              {option}
          </MenuItem>
        ))
      }
      </TextField>
    </form>
  )
}

export default Search;
