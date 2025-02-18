import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userAuthData: JSON.parse(localStorage.getItem("user")) || '',
    isLoggedIn: JSON.parse(localStorage.getItem("auth")) || false,
    userDetails:JSON.parse(localStorage.getItem("userDetails")) || null,
}


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userLogin: (state,action) => {
            state.isLoggedIn = true
            localStorage.setItem("auth", JSON.stringify(state.isLoggedIn))
            state.userDetails = action.payload
            localStorage.setItem("userDetails",JSON.stringify(state.userDetails))

        },
        logoutUser: (state,action) => {
            state.isLoggedIn = false
            localStorage.setItem("auth", JSON.stringify(state.isLoggedIn))
            state.userDetails=null
            localStorage.setItem("userDetails",JSON.stringify(state.userDetails))
            localStorage.removeItem('cartItems')
          

        },
    },
})


export const { userLogin, logoutUser } = userSlice.actions

export default userSlice.reducer