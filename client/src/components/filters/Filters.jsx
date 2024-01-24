import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilteredPokemons } from "../../features/pokemonSlice";
import { IoSearch } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import styles from "./filters.module.css";

const Filters = () => {
  let pokemons = useSelector((state) => state.pokemon.pokemons);
  let types = useSelector((state) => state.types.types);
  const dispatch = useDispatch();
  const [isDropdownOpen, setisDropdownOpen] = useState({
    //   alphabet: false,
    //   attack: false,
    //   types: false,
  });
  const [isAzOpen, setIsAzOpen] = useState(false);
  const [isAttackOpen, setIsAttackOpen] = useState(false);
  const [isTypesOpen, setIsTypesOpen] = useState(false);
  const [filterPanel, setFilterPanel] = useState({
    name: "",
    id: 0,
    alphabet: "none",
    attack: "",
    types: "",
  });
  let menuRef = useRef();
  // console.log("FP", filterPanel);

  const handleInputClick = (e) => {
    e.preventDefault();
  };

  // useEffect(() => {
  //   let handler = (e) => {
  //     if (menuRef.current.contains(e.target)) {
  //       setIsTypesOpen(false);
  //     }

  //     setIsAzOpen(false);
  //     setIsAttackOpen(false);
  //   };
  //   document.addEventListener("mousedown", handler);
  // }, []);
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
      if (filterPanel.attack !== "") {
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
      attack: "",
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

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.name, e.target.value);
    console.log({ ...filterPanel, [e.target.name]: e.target.value });
    setFilterPanel(() => {
      return { ...filterPanel, [e.target.name]: e.target.value };
    });
    setisDropdownOpen(!isDropdownOpen);
  };

  const handleAzClick = (e) => {
    console.log(e.target.name);
    e.preventDefault();
    setisDropdownOpen({ ...isDropdownOpen, [e.target.name]: e.target.value });
    setIsAzOpen(!isAzOpen);
  };
  const handleAttackClick = (e) => {
    setIsAttackOpen(!isAttackOpen);
  };
  const handleTypesClick = (e) => {
    setIsTypesOpen(!isTypesOpen);
  };

  return (
    <section className={styles.container}>
      <article className={styles.search}>
        <input
          type="text"
          name="name"
          value={filterPanel.name}
          placeholder="Type Name"
          className={styles.search_input}
          onChange={handleInputChange}
        />
        <button onClick={handleInputClick} className={styles.search_button}>
          <IoSearch className={styles.search_icon} />
        </button>
      </article>

      <div className={styles.sortAz}></div>

      <article className={styles.dropdown}>
        <button
          name="alphabet"
          className={styles.button}
          onClick={handleAzClick}
        >
          <h3>A - Z</h3> <FaAngleDown className={styles.angleDown} />
        </button>{" "}
        {isAzOpen && (
          <div
            name="alphabet"
            id="alphabet"
            // onChange={handleInputChange}
            className={styles.dropdown_menu}
          >
            <button
              name="alphabet"
              value="none"
              className={styles.dropdown_menu_item}
              onClick={handleClick}
            >
              None
            </button>
            <button
              name="alphabet"
              value="az"
              className={styles.dropdown_menu_item}
              onClick={handleClick}
            >
              A - Z
            </button>
            <button
              name="alphabet"
              value="za"
              className={styles.dropdown_menu_item}
              onClick={handleClick}
            >
              Z - A
            </button>
          </div>
        )}
      </article>

      <article className={styles.dropdown}>
        <button className={styles.button} onClick={handleAttackClick}>
          {" "}
          <h3>Attack</h3>
          <FaAngleDown className={styles.angleDown} />
        </button>
        {isAttackOpen && (
          <div name="attack" id="attack" className={styles.dropdown_menu}>
            <button
              onClick={handleClick}
              name="attack"
              value="none"
              className={styles.dropdown_menu_item}
            >
              None
            </button>
            <button
              onClick={handleClick}
              name="attack"
              value="low"
              className={styles.dropdown_menu_item}
            >
              Low
            </button>
            <button
              onClick={handleClick}
              name="attack"
              value="high"
              className={styles.dropdown_menu_item}
            >
              High
            </button>
          </div>
        )}
      </article>

      <article className={styles.dropdown} ref={menuRef}>
        <button className={styles.button} onClick={handleTypesClick}>
          <h3>Type</h3> <FaAngleDown className={styles.angleDown} />
        </button>
        {isTypesOpen && (
          <div name="types" className={styles.dropdown_menu}>
            {types?.map((t, i) => (
              <button
                name="types"
                key={i}
                value={t.name}
                className={styles.dropdown_menu_item}
                onClick={handleClick}
              >
                {t.name}
              </button>
            ))}
          </div>
        )}
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
