import React from "react";

import styles from "./navbar.module.css";
import Filters from "../filters/Filters";
function Navbar() {
  return (
    <nav>
      <h3>
        {" "}
        <a href="/">Home</a>
      </h3>{" "}
      <h3>
        <a href="/form">Create Pokemon</a>{" "}
      </h3>
      <h3> Filters</h3>
      <Filters />
    </nav>
  );
}

export default Navbar;
