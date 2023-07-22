import React from "react";
import './Header.css';
// Image
const logo = require('../../assets/investment-calculator-logo.png');

const Header: React.FC = () =>
{
    return (
        <header className="header">
            <img src={logo} alt="logo" />
            <h1>Investment Calculator</h1>
        </header>
    )
}

export default Header;