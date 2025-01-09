import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import User from "../../model/User";

export const userInputSlice = createSlice({
    name: 'userInput',
    initialState: {
        userName: '',
        naturalArea: '',
    },
    reducers: {
        updateUserName: (state, action) => {            
            state = action.payload;           
        },
        updateNaturalArea: (state, action) => {
            state = action.payload;
        },
        addUser: () => {

        },
        deleteUser: () => {

        },
    }
})

export const { updateUserName, updateNaturalArea, addUser, deleteUser } = userInputSlice.actions;

export default userInputSlice.reducer;