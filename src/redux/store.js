import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './reducerSlices/counterSlice'
import  userSlice  from './reducerSlices/userSlice'
import cartSlice  from './reducerSlices/cartSlice'

export const store = configureStore({
  reducer: {
    "counter" : counterSlice,
    "user": userSlice,
    "cart": cartSlice,
  },
})