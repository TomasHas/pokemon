import { configureStore } from "@reduxjs/toolkit";

import pokemonsReducer, {
  fetchPokemons,
} from "../features/pokemons/pokemonSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonsReducer,
  },
});
store.dispatch(fetchPokemons());
