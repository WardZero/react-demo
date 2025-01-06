import { createSlice } from "@reduxjs/toolkit";
import User from "../../model/User";

export const userInputSlice = createSlice({
    name: 'user',
    initialState: {
        user: new User()
    },
    reducers: {
        updateInputValue: (value) => {
            payload: value
        },
        addUser: () => {

        },
        deleteUser: () => {

        },
    }
})

export const { updateInputValue, addUser, deleteUser } = userInputSlice.actions;

export const userInputReducer = userInputSlice.reducer;