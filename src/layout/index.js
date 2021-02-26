import React, { useState } from 'react';

import Nav from '../components/ui/nav';
import Header from '../components/ui/header';
import Backdrop from '../components/ui/backdrop';

import './styles.scss';

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const buttonStyle = [
    'hamburger',
    'hamburger--spin',
    open ? 'is-active' : null,
  ];

  const openNavHandler = () => {
    setOpen(!open);

    document.documentElement.classList.toggle('_fixed');
    document.body.classList.toggle('_fixed');
  };

  return (
    <>
      <Nav open={open} />

      <div className="hamburger_wrapper">
        <button
          type="button"
          aria-label="navigation button"
          className={buttonStyle.join(' ')}
          onClick={openNavHandler}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>

      <Backdrop open={open} clicked={openNavHandler} />

      <Header />

      <main className="main">{children}</main>
    </>
  );
};

export default Layout;
