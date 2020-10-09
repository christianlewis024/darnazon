import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"

function Header() {
    return (
        <nav className="header">
            {/* logo on the left -> img */}
            <Link to="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            </Link>
            {/*search box  */}
            <header className="header__search">
            <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon"/>
            </header>
            {/* 3Links: sign in, returns/orders, yourPrime */}
            {/*basket icon/shopping cart */}
            

        </nav>
    )
}

export default Header
