import React from 'react';
import useFetch from './useFetch';

const JokeComponent = () => {
  const { data, loading, error, getJoke } = useFetch('https://api.example.com/joke'); // Replace with a valid joke API

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong…</p>}
      {data && (
        <div>
          <p>{data.joke}</p> {/* Adjust according to the structure of your joke data */}
          <button onClick={getJoke}>New Joke</button>
        </div>
      )}
    </div>
  );
};

export default JokeComponent;
