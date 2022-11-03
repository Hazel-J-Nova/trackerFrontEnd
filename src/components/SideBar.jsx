import Portal from '../utils/Portal';
import './SideBar.css';
import React from 'react';

const SideBar = ({ open, children, setIsOpen }) => {
  console.log(open);
  const SideBarStyles = {
    // position: 'fixed',
    backgroundColor: '#060b26',
    width: '250px',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    // left: '-100%',
    transition: '850ms',
  };
  if (!open) {
    return null;
  }
  return (
    <div>
      <h1>Hello</h1>
      <Portal>
        <div className='sideBar_overlay'>
          <div className='sideBar_styles'>
            <button
              onClick={(e) => {
                setIsOpen(!open);
              }}
            >
              Close Modal
            </button>
            {children}
          </div>
        </div>
      </Portal>
    </div>
  );
};

export default SideBar;
