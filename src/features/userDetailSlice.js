import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create action
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://64dd0092e64a8525a0f77c5d.mockapi.io/crud",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },

  extraReducers: {
    [createUser.pending]: (state) => {
      state.loading = true;
    },

    [createUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },

    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default userDetail.reducer;
