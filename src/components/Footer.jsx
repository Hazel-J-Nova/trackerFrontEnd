import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import useModal from '../utils/hooks/useModal';
import Portal from '../utils/portal';

const Footer = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <footer className='footer__main'>
      <div className='footer__social'></div>
      <div className='footer__links'></div>
      <div className='footer__contact'>
        <button
          onClick={(e) => {
            console.log(isOpen);
            setIsOpen(!isOpen);
          }}
        >
          <p>Contact us</p>
        </button>
        <Modal open={isOpen} setIsOpen={setIsOpen}>
          <h1>Goodbye</h1>
        </Modal>
      </div>
    </footer>
  );
};

export default Footer;
