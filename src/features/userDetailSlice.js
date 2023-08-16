import { createSlice } from '@reduxjs/toolkit'


export const userDetail = createSlice({
  name: 'userDetail',
  initialState: {
    users: [],
    loading: false,
    error: null
  }
})


// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default userDetail.reducer