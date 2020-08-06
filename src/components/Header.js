import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
const Header = () => (
  <div>
    <header className='black mb5 pt5'>
      <h1 className='ttu f3 tracked-mega anton tc mt0 mb3'>HEader</h1>
      <ul className='list flex justify-center pl0'>
        <li className='mh2'>
          <NavLink
            exact
            to='/'
            className='nav-link link black biryani-black f6 ttu gray'
          >
            Home
          </NavLink>
        </li>
        <li className='mh2'>
          <NavLink
            to='/archive'
            className='nav-link link black biryani-black f6 ttu gray'
          >
            Archive
          </NavLink>
        </li>
        <li className='mh2'>
          <NavLink
            to='/About'
            className='nav-link link black biryani-black f6 ttu gray'
          >
            About
          </NavLink>
        </li>
      </ul>
    </header>
  </div>
);

export default Header;
