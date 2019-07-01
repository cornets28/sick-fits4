// import React from 'react';
// import PropTypes from 'prop-types';
import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => {
    return (
        <NavStyles>
         <Link href="/items">
                <a>Shop</a>
            </Link>  
            <Link href="/sell">
                <a>sell</a>
            </Link>  
            <Link href="/signup">
                <a>SIgnUp</a>
            </Link>
            <Link href="/orders">
                <a>Order</a>
            </Link>  
            <Link href="/me">
                <a>Account</a>
            </Link>  
        </NavStyles>
    );
};

// Nav.propTypes = {
    
// };

export default Nav;