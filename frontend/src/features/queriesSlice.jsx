import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axios from "axios";

// INITIAL STATE
const initialState = {
  queries: [],
  isLoading: false,
};

//API URL
const createQueriesUrl = "http://localhost:8000/api/support/createSupport";

// Create product
export const createQueryAsync = createAsyncThunk(
  "query/create",
  async (formData) => {
    console.log(formData);
    try {
      const response = await axios.post(createQueriesUrl,formData);
      toast.success(response.data.msg);
      return response.data;
    } catch (error) {
      throw new Error(error)
    }
  }
);


const queriesSlice = createSlice({
  name: "queriesSlice",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(createQueryAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createQueryAsync.fulfilled, (state, action) => {
        state.isLoading = false;
      })

  },
});

export default queriesSlice.reducer;
