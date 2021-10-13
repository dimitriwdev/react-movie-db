import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(() => ({
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    height: '30px',
    padding: '0 30px',
    '@media(max-width: 1056px)' : {
      margin: '20px 0 10px 0',
    }
  },
  input: {
    border: 'none',
    height: '40px',
  },
  inputText: {
    padding: '0 15px',
    width: '300px',
    borderRadius: '40px 0 0 40px',
    fontSize: '20px',
    outline: 'none',
  },
  inputSubmit: {
    width: '50px',
    backgroundColor: 'yellow',
    borderLeft: '1px solid #000', 
    borderRadius: '0 40px 40px 0',
    cursor: 'pointer',
    '&:hover': {
      background: '#133897',
      color: '#fff'
    },
  },
}));

const Form = ({searchValue}) => {
  const classes = useStyles();
  const [input, setInput] = useState('');
  
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchValue(input);

    setInput('');
  };
  
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
        <input type='text' value={input} placeholder='Search for a movie' onChange={handleChange} className={`${classes.inputText} ${classes.input}`} />
        <button type='submit' className={`${classes.inputSubmit} ${classes.input}`}><SearchIcon fontSize='medium' /></button>
    </form>
  );
}

export default Form;
