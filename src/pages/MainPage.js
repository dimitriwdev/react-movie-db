import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import isEmpty from '../components/Utils';
import MovieCard from '../components/MovieCard';

import { makeStyles } from '@material-ui/core/styles';
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  mainPage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontFamily: 'Arial',
    backgroundColor: 'rgb(25, 25, 25)',
    padding: '0 20px 20px 20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
    width: '100vw',
    padding: '20px',
    '@media(max-width: 1056px)' : {
        justifyContent: 'center',
        flexDirection: 'column',
      },
  },
  title: {
    color: '#fff',
    padding: '0 30px',
    width: '40%',
    cursor: 'pointer',
    '&:hover': {
      color: 'rgba(0,212,255,1)',
    },
  },
  logo: {
    color: '#fff',
    fontSize: '100px',
    width: '20%',
    textAlign: 'center',
    cursor: 'pointer',
    '&:hover': {
      color: 'rgba(0,212,255,1)',
    },
  },
  cardContainer: {
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 0,
    padding: '20px 20px 0 20px',
    width: '100%',
},
cardList: {
  listStyle: 'none',
},
}));

const MainPage = () => {
  const classes = useStyles();
  
  let initialSearch = sessionStorage.getItem('search') || '';

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState(initialSearch);

  const title = 'Movie DB'

  const handleSearch = (searchValue) => {
    setSearch(searchValue);
  };

  const handleResetSearch = () => {
    setSearch('');
  };

  const apiKey = 'eaa0218047efa1a24d3ebb61cb467ec4';

  useEffect(() => {
    if(search){
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`
      )
      .then((res) => res.json())
      .then((result) => setMovies(result.results));
    }
  }, [search]);

  useEffect(() => {
    if(!search){
        fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
    )
    .then((res) => res.json())
    .then((result) => setMovies(result.results));
    }
  }, [search]);

  useEffect(() => {
    sessionStorage.setItem("search", search);
  });

  return (
    <div className={classes.mainPage}>
      <div className={classes.header}>
        <Typography variant='h4' className={classes.title} onClick={handleResetSearch}>
          {title}
        </Typography>
        <SlowMotionVideoIcon className={classes.logo} onClick={handleResetSearch}/>
        <Form searchValue={handleSearch}/>
      </div>
      
      {movies ? (
        <ul className={classes.cardContainer}>
          {!isEmpty(movies) &&
            (movies.length = 12) &&
            movies.map((movie, index) => (
              <div className={classes.cardList} key={index}>
                <MovieCard movie={movie}/>
              </div>
            ))}
        </ul> 
      ) : null}
    </div>
  );
}

export default MainPage;