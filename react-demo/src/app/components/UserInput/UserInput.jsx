import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NaturalAreaList } from '../NaturalAreaList/NaturalAreaList'
import { updateUserName, updateNaturalArea } from "./userInputSlice";

export function UserInput()  {
    const [userName, setUserName] = useState('');
    const dispatch = useDispatch();
    const selectedNaturalArea = useSelector(state => state.dropdown.selectedValue);

    const handleChange = (event) => {
        setUserName(event.target.value);
    };

    const handleSubmit = () => {           
        dispatch(updateUserName(userName));
        dispatch(updateNaturalArea(selectedNaturalArea));
    }

    return (
        <div>
            <div>
                <span>Name: <input id="userName" type="text" value={userName} onChange={handleChange} /></span>
                <p>
                    { userName }
                </p>
            </div>
            <div>
                <NaturalAreaList />  
            </div>

                     
            <div>
                <button onClick={handleSubmit}>Save</button>
            </div>
            
            
        </div>
    );
}