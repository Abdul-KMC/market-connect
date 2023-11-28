import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import CartButton from './CartButton';

function Header() {
  return (
    <header>
      <Link to="/">Market Connect</Link>
      <SearchBar />
      <CartButton />
      {/* Navbar with options */}
      {/* ... */}
    </header>
  );
}

export default Header;
