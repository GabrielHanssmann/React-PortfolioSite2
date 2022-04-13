import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

// Arrays de estilos del boton

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']

export  function Button({ children, type, onClick, buttonStyle, buttonSize }){

  // Llamar estilos de botones
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (

    <Link to='/sign-up' className='btn-mobile'>

      {/*Children para reutilizar el componente y classname para chequear el estilo del boton y cambiarlo segun queramos*/}

      <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
      >
        {children}
      </button>
    </Link>
  )
}

