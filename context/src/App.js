import React from "react";
import DisplayList from "./components/displayList";
import Nav from "./components/nav";
import { MovieProvider } from "./components/movieContextFile";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Nav />
        <DisplayList />
      </MovieProvider>
    </div>
  );
}
