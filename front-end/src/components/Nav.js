import React from 'react';
import {Link} from 'react-router-dom'
// import './compenents/App.css';

const Nav = () => {
    return (
      <div className='navbar'>
        <span><Link to='/'>Product</Link></span>
        <span><Link to='/add'>Add product</Link></span>
        <span><Link to='/update'>Update product</Link></span>
        <span><Link to='/delete'>Delete Product</Link></span>
        <span><Link to='/Logout'>Logout component</Link></span>
        <span><Link to='/Signup'>Signup</Link></span>
      </div>
    );
  };

export default Nav;
