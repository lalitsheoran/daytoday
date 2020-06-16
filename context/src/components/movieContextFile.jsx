import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies] = useState([
    { name: "Harry Potter", price: "10", id: "35345" },
    { name: "Spy Kids", price: "08", id: "45342" },
    { name: "Ghost Rider", price: "12", id: "38655" }
  ]);
  return (
    <MovieContext.Provider value={movies}>
      {props.children}
    </MovieContext.Provider>
  );
};
