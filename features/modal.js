import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = false;
export const modal = createSlice({
    name: "modal",
    initialState: {
        value: { initialStateValue },
    },
    reducers: {
        show: (state, action) => {
            state.value = true;
        },
        hide: (state, action) => {
            state.value = false;
        },
    },
});

export const { show, hide } = modal.actions;

export default modal.reducer;
