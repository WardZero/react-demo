import { configureStore } from "@reduxjs/toolkit";
import userInputReducer from "./components/UserInput/userInputSlice.jsx";
import dropdownReducer from "./components/NaturalAreaList/naturalAreaListSlice.jsx";
import counterReducer from "./components/Counter/counterSlice.jsx"

export default configureStore({
    reducer: {
        userInput: userInputReducer,
        dropdown: dropdownReducer,        
        counter: counterReducer,
    },
})