import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="info-div">
        <h1>This is the home page.</h1>
        <h3>A smarter way to buy books.</h3>
        <Link to="/shop">
          <button>Shop Now</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
