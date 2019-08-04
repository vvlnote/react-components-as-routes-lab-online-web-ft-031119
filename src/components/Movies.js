import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        	{movies.map((m, i) => (
        			<div key={i}> 
        				<h1>Name: {m.title}</h1> 
        				<h3>Time: {m.time}</h3>
        				<h3>Genres</h3>
        				<ul>
        					{m.genres.map((g, index) => (<li key={index}>{g}</li>))}
        				</ul>
        			</div>
        	))}
    </div>
  );
};

export default Movies;
