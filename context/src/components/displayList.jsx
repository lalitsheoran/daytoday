import React, { useContext } from "react";
import { MovieContext } from "./movieContextFile";

const DisplayList = () => {
  const movies = useContext(MovieContext);
  return (
    <div>
      {movies &&
        movies.map(movie => (
          <div key={movie.id}>
            <h3>{movie.name}</h3>
            <h4>{movie.price}</h4>
          </div>
        ))}
    </div>
  );
};
export default DisplayList;
