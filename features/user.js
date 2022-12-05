import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = {
    firstName: "",
    lastName: "",
    email: "",
    role: "Intern",
    phone: "",
    stage: "Beginner",
    bio: "... ",
    isLoggedIn: false,
};
export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: { initialStateValue },
    },
    
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state, action) => {
            state.value = initialStateValue;
        },
        update: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { login, logout, update } = userSlice.actions;

export default userSlice.reducer;
