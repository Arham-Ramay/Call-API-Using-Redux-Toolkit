import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllData = createAsyncThunk("gitUsers", async (args,{rejectWithValue}) => {
  const response = await fetch("https://api.github.com/users");
try{
  const result = await response.json();
 // Await for JSON parsing
  return result;
}catch(error){
return rejectWithValue("oops found error")
}
});

export const gitUser = createSlice({
  name: "gitUser",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getAllData.pending]: (state) => {
      state.loading = true;
    },
    [getAllData.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [getAllData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message; // Use action.error.message
    },
  },
});
export default gitUser.reducer;