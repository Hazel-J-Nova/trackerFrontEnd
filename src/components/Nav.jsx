import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { useState } from 'react';
import SideBar from './SideBar';
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <button
        className='nav__button'
        onClick={(e) => {
          console.log(isOpen);
          setIsOpen(!isOpen);
        }}
      >
        Slide Over
      </button>
      <SideBar open={isOpen} setIsOpen={setIsOpen}>
        <div className=''>
          <h1>Hello</h1>
        </div>
      </SideBar>

      <ul className='nav__list'>
        <li className='nav__list--element'>
          <button className='button nav__button'>
            <Link className='nav__link' to='/'>
              Home
            </Link>
          </button>
        </li>
        <li className='nav__list--element'>
          <button className='button nav__button'>
            <Link to='/todos' className='nav__link'>
              Todo
            </Link>
          </button>
        </li>
        <li className='nav__list--element'>
          <button className='button nav__button'>
            <Link to='/timers' className='nav__link'>
              Timers
            </Link>
          </button>
        </li>
        <li className='nav__list--element'>
          <button className='button nav__button'>
            <Link to='/reminders' className='nav__link'>
              Reminder
            </Link>
          </button>
        </li>
        <li className='nav__list--element'>
          <button className='button nav__button'>
            <Link to='/reminders' className='nav__link'>
              Reminder
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
