import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilteredPokemons } from "./../../features/pokemons/pokemonSlice";
const Filters = () => {
  let pokemons = useSelector((state) => state.pokemon.pokemons);
  const dispatch = useDispatch();
  const [filterPanel, setFilterPanel] = useState({ name: "", id: 0 });

  console.log("FP", filterPanel);

  const handleClick = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    // console.log("type", typeof e.target.value);

    setFilterPanel(() => {
      return { ...filterPanel, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    let pokemonsCopy = [...pokemons];

    console.log("length", pokemons.length);
    if (pokemonsCopy.length > 0) {
      if (filterPanel.name !== "") {
        pokemonsCopy = pokemonsCopy.filter((p) =>
          p.name?.toLowerCase().includes(filterPanel.name.toLowerCase())
        );
      }
    }
    console.log(
      "useeffect",
      pokemonsCopy.filter((p) =>
        p.name?.toLowerCase().includes(filterPanel.name.toLowerCase())
      )
    );
    dispatch(setFilteredPokemons(pokemonsCopy));
  }, [dispatch, filterPanel]);

  return (
    <div>
      Filters
      <div>
        <section>
          <input type="text" name="name" onChange={handleInputChange} />{" "}
          <button onClick={handleClick}>Search</button>
        </section>
        {/* <section>
          <input type="number" name="id" onChange={handleInputChange} />{" "}
          <button onClick={handleNumberClick}>ID</button>
        </section> */}
      </div>
    </div>
  );
};

export default Filters;
