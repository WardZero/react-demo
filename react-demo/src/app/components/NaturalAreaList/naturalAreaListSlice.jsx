import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedValue: '',
    selectedLabel: '',
    options: [
        { value: '', label: ''},
        { value: 'option1', label: 'McMurray' },
        { value: 'option2', label: 'Magpie Meander' },
        { value: 'option3', label: 'Sawyer' },
    ],
}

const dropdownSlice = createSlice({
    name: 'dropdown',
    initialState,
    reducers: {
        setValue: (state, action) => {
            state.selectedValue = action.payload;           
        },
        setLabel: (state, action) => {
            state.selectedLabel = action.payload;
        },
    },
});

export const { setValue, setLabel } = dropdownSlice.actions;

export default dropdownSlice.reducer;