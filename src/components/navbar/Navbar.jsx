import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../button/Button';
import './Navbar.css'

export const Navbar = () => {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  /*Funcion click menu hamburger toogle y ocultar enlaces de menu*/
  const handleClick = () => {
    setClick(!click);
  };
  /*Al hacer click en el enlace del menu se cierra el menu*/
  const closeMobileMenu = () => setClick(false);

  // funcion para mostar o no mostar el boton si la pantalla es responsiva
  const showButton = () =>{
    if(window.innerWidth <= 960){
      setButton(false)
    } else{
      setButton(true)
    }
  };

  // Usar useEffect para que el boton no vuelva a aparecer cuando se refresque la pagina
  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
  {/*---- Link hecho con react-router ----*/}
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
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
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
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
          {/*Si boton es verdadero devolver el componente Button, esto se va a usar para chequear si la pantalla es responsiva o no. Si es pantalla de PC que se muestre el componente, de lo contrario ocultarlo.
          En la clase se le pone el estilo que queremos invocar, si no se coloca ningun estilo, va a tomar el primero del array que creamos en Button.jsx */}
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>

    </>
  )
}
