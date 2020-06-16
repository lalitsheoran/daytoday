import React, { useContext } from "react";
import { MovieContext } from "./movieContextFile";

const Nav = () => {
  const movies = useContext(MovieContext);
  return (
    <div>
      This is my NavBar ->
      {movies && (
        <span style={{ color: "grey" }}> List of movies : {movies.length}</span>
      )}
    </div>
  );
};
export default Nav;
