import React from 'react'
import '../../App.css'
import './Hero.css'
import { Button } from '../button/Button'

function Hero() {

  return (
    <>
      <div className="hero-container">
        <h1>Adventure Awaits</h1>
        <p>what are you wating for?</p>
        <div className="hero-btns">
          <Button 
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'>
            GET STARTED
          </Button>
          <Button 
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'>
            WATCH TRAILER <i className='far fa-play-circle'></i>
          </Button>
        </div>
      </div>
    </>
  )
}

export default Hero;
