import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

export default () => {
    return(
        <nav>
            <NavLink to = "/">Home</NavLink>
            <NavLink to = "/add">Add Smurf</NavLink>
        </nav>
    )
}