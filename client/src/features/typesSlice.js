import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  types: [],
  typesStatus: "idle",
  typesError: null,
};

export const fetchTypes = createAsyncThunk("types/fetchTypes", async () => {
  try {
    const response = await axios.get("http://localhost:3001/types");
    // console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
});
// console.log(fetchTypes);

const typesSlice = createSlice({
  name: "types",
  initialState,
  reducers: {
    getTypes: (state, action) => {
      state.types = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTypes.pending, (state) => {
        state.typesStatus = "loading";
      })
      .addCase(fetchTypes.fulfilled, (state, action) => {
        // console.log("types", action.payload);
        state.typesStatus = "succeeded";
        state.types = action.payload;
      })
      .addCase(fetchTypes.rejected, (state, action) => {
        state.typesStatus = "failed";
        state.typesError = action.error.message;
      });
  },
});

export const { getTypes } = typesSlice.actions;
export default typesSlice.reducer;
