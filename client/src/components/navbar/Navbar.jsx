import React, { useState } from "react";

import styles from "./navbar.module.css";
import Filters from "../filters/Filters";
import { useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
function Navbar() {
  const [toggleFilters, setToggleFilters] = useState(true);

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  console.log(toggleFilters);
  console.log(isHomePage);
  console.log(location.pathname);

  const handleClick = (e) => {
    e.preventDefault();

    setToggleFilters(() => !toggleFilters);
  };
  return (
    <nav>
      <div className={styles.navbar_container}>
        {" "}
        <FaBars className={styles.hamburger} />
        <div className={styles.items}>
          <a href="/">
            <h3>Home</h3>
          </a>
        </div>
        <div className={styles.items}>
          <a href="/form">
            <h3>Create Pokemon</h3>
          </a>
        </div>{" "}
        <div className={styles.itemFilter}>
          {isHomePage && (
            <button onClick={handleClick}>
              <h2>Filters</h2>
            </button>
          )}
        </div>{" "}
        <div className={styles.filters}>
          {isHomePage && (
            <div className={styles.filters_container}>
              <div>{toggleFilters && <Filters />}</div>
            </div>
          )}
        </div>
      </div>{" "}
    </nav>
  );
}

export default Navbar;
