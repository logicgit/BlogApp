import React from "react";
import {Link} from 'react-router-dom'
import Logo from "../img/logo.png"

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt="" />
            <span>Made with ♥ and <b>React.js</b></span>
        </footer>
    )
}

export default Footer