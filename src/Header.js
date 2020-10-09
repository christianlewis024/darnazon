import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

function Header() {
    return (
        <nav className="header">
            {/* logo on the left -> img */}
            <Link to="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
            {/*search box  */}
            {/* 3Links: sign in, returns/orders, yourPrime */}
            {/*basket icon/shopping cart */}
            </Link>

        </nav>
    )
}

export default Header
