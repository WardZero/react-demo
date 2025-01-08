import { createSlice } from "@reduxjs/toolkit";
import User from "../../model/User";

export const userInputSlice = createSlice({
    name: 'userInput',
    initialState: {
        userInput: ''
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

export default userInputSlice.reducer;