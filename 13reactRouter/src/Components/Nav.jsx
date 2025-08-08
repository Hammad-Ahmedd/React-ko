import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <div className="nav-wrapper">
            <NavLink to="/about">
                About
            </NavLink>
        </div>
    )
}

export default Nav
