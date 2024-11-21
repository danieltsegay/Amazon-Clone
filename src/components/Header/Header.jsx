import React from 'react'
import classes from './Header.module.css'
import LowerHeader from './LowerHeader';
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";


function Header() {
  return (
        <section className={classes.header__outerContainer}>
        <header>
        <section className={classes.header__container}>
            {/* Logo */}
            <div className={classes.logo__container}>
            <a to="/">
                <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="amazon logo" />{" "}
                {/* Amazon logo with a to homepage */}
            </a>

            {/* Delivery location */}
            <div className={classes.delivery}>
                <span>
                <SlLocationPin size={19} /> {/* Location pin icon */}
                </span>
                <div>
                <p>Deliver to</p>
                <span>Ethiopia</span> {/* Static delivery location */}
                </div>
            </div>
            </div>

            {/* Search Bar */}
            <div className={classes.header__search}>
            {/* Category Dropdown */}
            <select
                className={classes.header__search_category}
                value='' // Current selected category
                // onChange={(e) => setSelectedCategory(e.target.value)} // Handle category change
            >
            </select>

            {/* Search Input */}
            <div className={classes.header__search_InputContainer}>
                <input
                type="text"
                placeholder="Search Amazon"
                value='' // Current search term
                // onChange={handleSearchInputChange} // Handle search input change
                />
                {/* Search Suggestions */}
            </div>
            {/* Search Icon */}
            <BsSearch
                className={classes.header__search_icon}
                size={40}
                // onClick={handleSearch} // Trigger search on icon click
            />
            </div>

            {/* Right-side as (Account, Orders, Cart) */}
            <div className={classes.order__container}>
            {/* Language Selector */}
            <a href="" className={classes.language}>
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg"
                alt="USA Flag"
                />
                <select>
                <option>EN</option> {/* Static language option */}
                </select>
            </a>

             {/* Sign In / Sign Out */}
             <a to="/auth">
              <div>
                
                  <>
                    <p>Hello, Sign In</p> {/* If no user, show Sign In */}
                    <span>Account & Lists</span>
                  </>
              </div>
            </a>

            {/* Orders */}
            <a to="/orders">
                <p>returns</p>
                <span>& Orders</span> {/* a to user's orders */}
            </a>

            {/* Cart */}
            <a to="/cart" className={classes.cart}>
                <BiCart size={35} /> {/* Cart icon */}
                {/* <span>{totalItem}</span> Display total items in cart */}
            </a>
            </div>
            
        </section>
        
        </header>
        <LowerHeader/>
    </section>
  )
}

export default Header