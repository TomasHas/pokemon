import { configureStore } from "@reduxjs/toolkit";

import pokemonsReducer, { fetchPokemons } from "../features/pokemonSlice";
import typesReducer, { getTypes, fetchTypes } from "../features/typesSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonsReducer,
    types: typesReducer,
  },
});
store.dispatch(fetchPokemons());
store.dispatch(fetchTypes());
store.dispatch(getTypes());
