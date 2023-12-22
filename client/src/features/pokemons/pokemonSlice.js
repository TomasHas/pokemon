import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the initial state
const initialState = {
  loading: false,
  pokemons: [],
  filteredPokemons: [],
  pokeStatus: "idle",
  pokeError: null,
  pokemonDetail: [],
  detailStatus: "idle",
  detailError: "",
};

// Define the async thunk
export const fetchPokemons = createAsyncThunk(
  "pokemons/fetchPokemons",
  async () => {
    try {
      const response = await axios.get("http://localhost:3001/pokemons");
      // console.log("response.all ", response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getPokemonById = createAsyncThunk(
  "pokemons/getPokemonById",
  async (id) => {
    console.log("id", id);
    try {
      const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
      // console.log("response.id ", response.data.result);
      return response.data.result;
    } catch (error) {
      throw error;
    }
  }
);

// Create a slice of the Redux store
const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFilteredPokemons: (state, action) => {
      console.log("action filter", action.payload);
      state.filteredPokemons = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.pokeStatus = "loading";
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.pokeStatus = "succeeded";
        state.pokemons = action.payload;
        state.filteredPokemons = action.payload;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.pokeStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(getPokemonById.pending, (state) => {
        state.detailStatus = "loading";
        state.detailError = ""; // Reset detailError when pending
      })
      .addCase(getPokemonById.fulfilled, (state, action) => {
        state.detailStatus = "succeeded";
        state.pokemonDetail = action.payload;
      })
      .addCase(getPokemonById.rejected, (state, action) => {
        state.detailStatus = "failed";
        state.detailError = action.error.message;
      });
  },
});
export const { setFilteredPokemons } = pokemonsSlice.actions;
// Export the reducer
export default pokemonsSlice.reducer;
