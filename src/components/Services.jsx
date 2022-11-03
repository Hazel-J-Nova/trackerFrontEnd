import Cards from './Cards'
import React from 'react'
import testCard from '../assets/sword.png'
import './Services.css'

function Services() {
  return (
    <section className='section__services'>
        <Cards content="Hello this is a card with some test on it " title='Test Card' cardImage={testCard} > </Cards>
        <Cards content="Hello this is a card with some test on it " title='Test Card' cardImage={testCard} > </Cards>
        <Cards content="Hello this is a card with some test on it " title='Test Card' cardImage={testCard} > </Cards>
    </section>
  )
}

export default Services