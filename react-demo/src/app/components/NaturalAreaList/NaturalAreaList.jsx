import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setValue, setLabel } from "./naturalAreaListSlice";

export function NaturalAreaList() {
    const dispatch = useDispatch();
    const options = useSelector((state) => state.dropdown.options);
    const selectedValue = useSelector((state) => state.dropdown.selectedValue);
    const selectedLabel = useSelector((state) => state.dropdown.selectedLabel);
    

    const handleChange = (event) => {
        dispatch(setValue(event.target.value));
        dispatch(setLabel(event.target.value));
    };

    return (
        <>
            <select value={ selectedValue } onChange={ handleChange }>
                {options.map((option) => (
                    <option key={ option.value } value={ option.value } label={ option.label }>
                        {option.label}
                    </option>
                ))}
            </select>
            <p>
                { selectedLabel }
            </p>
        </>
    );
};