import React from 'react'
import ShoppingCard from './ShoppingCard';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header>
        <h2>Shopping Cart</h2>
        <div>
          <SearchBar/>
          <ShoppingCard />
        </div>
    </header>
  )
}

export default Header