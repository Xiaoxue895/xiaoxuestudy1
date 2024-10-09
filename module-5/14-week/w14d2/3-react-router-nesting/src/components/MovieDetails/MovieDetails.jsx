import React from "react";
import {useParams} from 'react-router-dom';


function MovieDetails({movies}) {

  const {movieId} = useParams();

  const movieChoice = movies.find(movie => movie.id.toString() === movieId);

  if (!movieChoice) {
    return <h1>Movie Not Found</h1>; 
  }

  return (
    <div className='comp purple'>
      <h1>{movieChoice.title}</h1> 
      <p>{movieChoice.description}</p> 
    </div>
  );
}

export default MovieDetails;
