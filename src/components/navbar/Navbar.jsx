import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  const [click, setClick] = useState(false);

  /*Funcion click menu hamburger toogle y ocultar enlaces de menu*/
  const handleClick = () => {
    setClick(!click);
  };
  /*Al hacer click en el enlace del menu se cierra el menu*/
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className="n">
        <div className="navbar-container">
  {/*---- Link hecho con react-router ----*/}
          <Link to='/' className='navbar-logo'>
            TRVL <i className='fab fa-typo3'></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/sevices' className='nav-links' onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>

    </>
  )
}
