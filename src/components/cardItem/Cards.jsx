import React from 'react'
import CardsItem from './CardsItem'
import './Cards.css'
import image1 from '../../images/img-9.jpg'
import image2 from '../../images/img-8.jpg'
import image3 from '../../images/img-7.jpg'
import image4 from '../../images/img-5.jpg'
import image5 from '../../images/img-6.jpg'



function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
        <ul className="cards__items">
            <CardsItem 
            picSrc={image4}
            text='Descover how to stay in one of the best Hotels in New York for a cheap price'
            label='Travel'
            path='/services'
            />
            <CardsItem 
            picSrc={image5}
            text='Walk in one of the most crouded cities in the world and explore all its corners'
            label='Luxury'
            path='/services'
            />
            </ul>
          <ul className="cards__items">
            <CardsItem 
            picSrc={image1}
            text='Explore the hidden waterfall deep inside the Amazon Jungle'
            label='Adventure'
            path='/services'
            />
            <CardsItem 
            picSrc={image2}
            text='Travel through the desert and descover new horizons'
            label='Explore'
            path='/services'
            />
            <CardsItem 
            picSrc={image3}
            text='Discover the beauty of the montains in one day'
            label='Sport'
            path='/services'
            />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards