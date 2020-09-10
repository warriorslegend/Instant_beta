import React from 'react';
import { Link } from 'react-router-dom';
// Content
import { InstantLogoPrimary, InstantLogoSecondary, InstantLogoAlt } from '../constants/Data';
import { LinkStyle } from '../constants/Style'
import SearchBox from './SearchBox';
import ShoppingCart from './ShoppingCart'

export default function NavBar() {
    return (
        <nav className="flex row full space-between align-center">
            <aside>
                <Link to="/" style={LinkStyle}>
                    <img
                        src={InstantLogoPrimary}
                        alt={InstantLogoAlt}
                        id="nav-bar-logo"
                    />
                    <img
                        src={InstantLogoSecondary}
                        alt={InstantLogoAlt}
                        id="nav-bar-logo-mobile"
                        className="mobile"
                    />
                </Link>
            </aside>
            <SearchBox/>
            <ShoppingCart/>
        </nav>
    )
}
