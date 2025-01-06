import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector, useDispatch } from "react-redux";
import NaturalArea from "../../model/NaturalArea"
import 'bootstrap/dist/css/bootstrap.min.css';

export function NaturalAreaList() {
    const naturalAreas = [];
        naturalAreas.push(new NaturalArea(1, 'McMurray'));
        naturalAreas.push(new NaturalArea(2, "Sawyer"));
        naturalAreas.push(new NaturalArea(3, "Magpie Meander"));


    return(        
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-natural-areas">
                Natural Area List
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {naturalAreas.map((naturalArea) => (
                    <Dropdown.Item href="#/action" key={naturalArea.id}>{naturalArea.name}</Dropdown.Item>
                ))}           
            </Dropdown.Menu>
        </Dropdown>  
    );
}
