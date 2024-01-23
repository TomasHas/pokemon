import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilteredPokemons } from "../../features/pokemonSlice";

import { FaAngleDown } from "react-icons/fa";
import styles from "./filters.module.css";
const Filters = () => {
  let pokemons = useSelector((state) => state.pokemon.pokemons);
  let types = useSelector((state) => state.types.types);
  const dispatch = useDispatch();

  const [filterPanel, setFilterPanel] = useState({
    name: "",
    id: 0,
    alphabet: "none",
    attack: 0,
    types: "",
  });

  // console.log("FP", filterPanel);

  const handleInputClick = (e) => {
    e.preventDefault();
  };

  // const handleAlphabetSort = (e) => {
  //   e.preventDefault();
  //   setFilterPanel(() => {
  //     return {...filterPanel, e.target.name}
  //   });
  // };

  useEffect(() => {
    let pokemonsCopy = [...pokemons];

    // console.log("length", pokemons.length);
    if (pokemonsCopy.length > 0) {
      if (filterPanel.name !== "") {
        pokemonsCopy = pokemonsCopy.filter((p) =>
          p.name?.includes(filterPanel.name)
        );
      }
      if (filterPanel.types !== "") {
        pokemonsCopy = pokemonsCopy.filter((p) =>
          p.types?.includes(filterPanel.types)
        );
      }
      if (filterPanel.attack !== 0) {
        if (filterPanel.attack === "low") {
          pokemonsCopy = pokemonsCopy.sort((a, b) => a.attack - b.attack);
        } else {
          pokemonsCopy = pokemonsCopy.sort((a, b) => b.attack - a.attack);
        }
      }

      if (filterPanel.alphabet !== "none") {
        if (filterPanel.alphabet === "az") {
          pokemonsCopy = pokemonsCopy.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
        } else {
          pokemonsCopy = pokemonsCopy.sort((a, b) =>
            b.name.localeCompare(a.name)
          );
        }
      }

      // console.log(pokemonsCopy);
    }

    dispatch(setFilteredPokemons(pokemonsCopy));
  }, [dispatch, filterPanel, pokemons]);

  const handleReset = () => {
    setFilterPanel({
      name: "",
      id: 0,
      alphabet: "none",
      attack: 0,
      types: "",
    });
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    // console.log("type", typeof e.target.value);
    console.log({ ...filterPanel, [e.target.name]: e.target.value });
    setFilterPanel(() => {
      return { ...filterPanel, [e.target.name]: e.target.value };
    });
  };

  return (
    <section className={styles.container}>
      <article className={styles.search}>
        <input
          type="text"
          name="name"
          value={filterPanel.name}
          onChange={handleInputChange}
          placeholder="Type Name"
          className={styles.search_input}
        />
        <button onClick={handleInputClick}>
          <h3>Search</h3>
        </button>
      </article>

      <div className={styles.sortAz}>
        <button>
          <h3>A - Z</h3>
        </button>{" "}
        <FaAngleDown />
      </div>

      {/* <article className={styles.filter_items}>
        {" "}
        <select name="alphabet" id="alphabet" onChange={handleInputChange}>
          <option key="title" value="title" className={styles.option_title}>
            Sort A-Z
          </option>
          <option key="none" value="none">
            None
          </option>
          <option key="az" value="az">
            A - Z
          </option>
          <option key="za" value="za">
            Z - A
          </option>
        </select>
      </article> */}
      <article className={styles.filter_items}>
        <h3>Attack</h3>
        <select name="attack" id="attack" onChange={handleInputChange}>
          <option value="none">None</option>
          <option value="low">Low</option>
          <option value="high">High</option>
        </select>
      </article>

      <article className={styles.filter_items}>
        <h3>Type</h3>
        <select
          name="types"
          id="types"
          value={filterPanel.types}
          onChange={handleInputChange}
        >
          <option value="">Choose Type</option>
          {types?.map((t, i) => (
            <option key={i} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>
      </article>
      <article className={styles.filter_items}>
        <button onClick={handleReset}>
          <h2>Reset</h2>
        </button>
      </article>
    </section>
  );
};

export default Filters;

// console.log(
//   "useeffect",
//   pokemonsCopy.filter((p) =>
//     p.name?.toLowerCase().includes(filterPanel.name.toLowerCase())
//   )
// );
