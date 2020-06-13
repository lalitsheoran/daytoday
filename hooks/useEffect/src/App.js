import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    let timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });
  useEffect(() => {
    console.log("I am logged only when count changes");
  }, [count]);
  return (
    <>
      <h2>useEffect</h2>
      {count > 10 && <p>{time.toLocaleString()}</p>}
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  );
}
