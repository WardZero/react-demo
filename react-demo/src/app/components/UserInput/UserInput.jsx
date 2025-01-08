import React, { useState } from "react";
import { useDispatch } from "react-redux";

export function UserInput()  {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        dispatch(updateInputValue(inputValue));
    }

    return (
        <div>
            <span>Name: <input id="userName" type="text" value={inputValue} onChange={handleChange} /></span>            

            <button onClick={handleSubmit}>Save</button>

            <p>
                { inputValue }
            </p>
        </div>
    );
}