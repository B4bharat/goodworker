import React from 'react';

import classes from './Movie.css';

const MovieCard = (props) => {
  const { title } = props.item;

  return (
    <div
      className={classes.Container}
      // style={{
      //   backgroundImage:
      //     poster_path && `url(http://image.tmdb.org/t/p/w185${poster_path})`,
      // }}
    >
      <div className={classes.Bottom}>
        <h3 className={classes.Title}>{title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
