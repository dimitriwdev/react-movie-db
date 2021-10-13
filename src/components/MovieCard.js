import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import LinesEllipsis from 'react-lines-ellipsis';

const useStyles = makeStyles(() => ({
  card: {
    boxSizing: 'border-box',
    margin: '10px 10px 20px 10px',
    padding: '20px',
    width: '300px',
    height: '380px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '2px solid #fff',
    cursor: 'pointer',
    overflow: 'hidden',
    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 100%)',
    color: '#fff',
    borderRadius: '10px',
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
  title: {
    marginBottom: '20px',
  },
  poster: {
    width: '100px',
    height: '150px',
    marginBottom: '20px',
    border: '1px solid #fff',
    borderRadius: '10px',
  },
  overview: {
    overflow: 'hidden',
    wordBreak: 'break-word',
  }
}));

const MovieCard = ({movie}) => {
  const classes = useStyles();

  return (
    <NavLink
      to={{
        pathname: '/movie',
        state: { movie: movie }
      }}
      className={classes.card}
    >
      <Typography variant='h5' className={classes.title}>
        {movie.title}
      </Typography>
      <div className={classes.posterContainer}>
        <img
          className={classes.poster}
          src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt='poster'
        />
      </div>
      <LinesEllipsis
        className={classes.overview}
        text={movie.overview}
        basedOn='letters'
        maxLine={3}
      />
    </NavLink>
  );
}

export default MovieCard;
