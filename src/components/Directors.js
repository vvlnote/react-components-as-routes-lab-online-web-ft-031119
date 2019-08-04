import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      	<div>
      		{directors.map((d, index) => (
      			<div key={index}>
      			<h1>Name: {d.name}</h1>
      			<h3>Movies</h3>
      			<ul>
      				{d.movies.map((m, i) => (
      					<li key={i}>{m}</li>
      					))}
      			</ul>
      			</div>
      			))}
      	</div>
    </div>
  );
}

export default Directors
