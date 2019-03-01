import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

export default () => {
    return(
        <nav>
            <NavLink exact to = "/"  activeClassName = 'active'>Home</NavLink>
            <NavLink exact to = "/add" activeClassName = 'active'>Add Smurf</NavLink>
        </nav>
    )
}