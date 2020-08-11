import React from "react"
import image from "../Images/pic2.jpg"
import "../Styles/header.css"
import { Link } from "react-router-dom"

const Header = props => {
    return (
        <div className="header">
            <img className="himg" src={image} alt="home image" />
            <Link to="/">
                <h4>Home</h4>
            </Link>
        </div>
    )
}

export default Header