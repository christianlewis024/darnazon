import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import {useStateValue} from "./StateProvider"
import { auth } from './firebase'

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const login = () => {
        if (user) {
            auth.signOut();
        }
    }
    
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
            <div className="header__nav">
            {/* first link - sign in*/}
            <Link to={!user && "/login"} className="header__link">
            <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
            </Link>
            {/* second link - returns and orders*/}
            <Link to="/orders" className="header__link">
            <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
            </div>
            </Link>
            {/* third link - your prime*/}
            <Link to="/" className="header__link">
            <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
            </div>
            </Link>
            {/* fourth link - checkout */}
            <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
                {/* shopping cart icon */}
                <ShoppingBasketIcon/>
                {/*   number of items in the basket*/}
                <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
            
            </div>

            </Link>
            </div>
            {/*basket icon/shopping cart */}
            

        </nav>
    )
}

export default Header
