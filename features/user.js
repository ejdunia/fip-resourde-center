import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: {
            firstName: "John",
            lastName: "Deez",
            email: "deez.john@mail.com",
            role: "Intern",
            phone: "+2348012345678",
            stage: "Beginner",
            bio: "List Your Interests. To make a good first impression, you need to connect with your profile ... ",
            isLoggedIn: false,
        },
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
