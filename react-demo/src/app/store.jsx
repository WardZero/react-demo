import { configureStore } from "@reduxjs/toolkit";
//import { naturalAreaListReducer } from "./components/NaturalAreaList/naturalAreaListSlice.jsx"
import { userInputReducer } from "./components/UserInput/userInputSlice.jsx";

export default configureStore({
    reducer: {
        userInputReducer,
        //naturalAreaListReducer: naturalAreaListReducer,
        
    },
})