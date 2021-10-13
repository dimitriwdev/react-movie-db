import React from 'react';

import { NavLink, useLocation } from 'react-router-dom';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    movieCardContent: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        color: '#fff',
        fontFamily: 'Arial',
        textAlign: 'left',
        lineHeight: 2,
      },
      backLink: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        textAlign: 'left',
        padding: '20px',
        color: '#fff',
        textDecoration: 'none',
        '&:hover': {
            color: 'rgba(0,212,255,1)',
          },
      },
      button: {
        marginLeft: '5px',
        fontSize: '16px',
      },
      movieCardContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px',
        '@media(max-width: 1056px)' : {
            textAlign: 'center',
            flexDirection: 'column',
          },
      },
      posterContainer: {
        width: '330px',
        height: '500px',
      },
      poster: {
        border: '2px solid rgba(0,212,255,1)',
        width: '330px',
        height: '500px',
        borderRadius: '10px',
      },
      movieDetails: {
        padding: '20px',
        paddingLeft: '100px',
        '@media(max-width: 1056px)' : {
            padding: '50px 20px 20px 20px',
          },
      },
      movieTitle: {
        marginBottom: '50px',
        color: 'rgba(0,212,255,1)',
        textTransform: 'uppercase',
      },
      movie: {
        marginBottom: '50px',
      },
      dateLabel: {
          color: 'rgba(0,212,255,1)',
      },
      voteLabel: {
        color: 'rgba(0,212,255,1)',
      },
      langLabel: {
        color: 'rgba(0,212,255,1)',
      },
}));

const MovieCardContent = () => {
  const classes = useStyles();
  let location = useLocation();

const changeFormatDate = () => {
    const releaseDate = location.state.movie.release_date;
    return releaseDate.split("-").reverse().join("-");
}

  return (
    <div className={classes.movieCardContent}>
      <div className={classes.backLinkContainer}>
        <NavLink exact to='/' className={classes.backLink}>
          <ArrowBackOutlinedIcon />
          <Typography variant='h5' className={classes.button}>
            Back
          </Typography>
        </NavLink>
      </div>
      <div className={classes.movieCardContainer}>
        <div className={classes.posterContainer}>
          <img
            src={`http://image.tmdb.org/t/p/w500${location.state.movie.poster_path}`}
            alt='poster'
            className={classes.poster}
          />
        </div>
        <div className={classes.movieDetails}>
          <div className={classes.movieTitle}>{location.state.movie.title}</div>
          <div className={classes.movie}>{location.state.movie.overview}</div>
          <div className={classes.movie}>
            <span className={classes.dateLabel}>Release Date: </span>
            {changeFormatDate()}
          </div>
          <div className={classes.movie}>
            <span className={classes.voteLabel}>Vote average: </span>
            {location.state.movie.vote_average}
          </div>
          <div className={classes.movie}>
            <span className={classes.langLabel}>Original language: </span>
            {location.state.movie.original_language}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCardContent;