import React from 'react';
import './Nav.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return(
        <nav>
            <div><NavLink to='/' exact>Home</NavLink></div>
            <div><NavLink to='/counter'>Counter</NavLink></div>
        </nav>
    )
}

export default Nav
