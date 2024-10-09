import React from "react";
import { NavLink } from 'react-router-dom';

const MovieNavBar = ({movies}) =>{
    return(
    <nav>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <NavLink to={movie.id.toString()}>{movie.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
    )
}

export default MovieNavBar;