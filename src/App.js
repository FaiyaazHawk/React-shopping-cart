import React from "react";
import {Link} from 'react-router-dom'

function App() {
  return (
    <div >
      <ul>
        <Link to="/">
        <li>Home</li>
        </Link>
        <Link to="/About">
        <li>About</li>
        </Link>
        <Link to="/Shop">
        <li>Shop</li>
        </Link>
      </ul>
      <h2>Welcome to the shop-zone</h2>
    </div>
  );
}

export default App;
