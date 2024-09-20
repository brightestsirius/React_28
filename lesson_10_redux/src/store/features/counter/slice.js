import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    color: `#ff0000`
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, {payload}) => {
      state.value += payload
    },
    setColor: (state, {payload}) => {
        state.color = payload;
    }
  },
})

export const { increment, decrement, incrementByAmount, setColor } = counterSlice.actions

export default counterSlice.reducer