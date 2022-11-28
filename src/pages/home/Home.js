import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <h1>Hello mate</h1>
      <input className="main-input" placeholder="Username..." />

      <select>
        <option>Select room</option>
        <option>Javascript</option>
        <option>Node</option>
        <option>React</option>
      </select>

      <button>Join room</button>
    </div>
  );
};

export default Home;
