import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      <div>
      		{actors.map((a, index) => (
      			<div key={index}>
      			<h1>Name: {a.name}</h1>
      			<h3>Movies</h3>
      			<ul>
      				{a.movies.map((m, i) => (
      					<li key={i}>{m}</li>
      					))}
      			</ul>
      			</div>
      			))}
      	</div>
    </div>
  );
};

export default Actors;
