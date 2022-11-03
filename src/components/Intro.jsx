import React from 'react'
import SpreadSheet from '../assets/Spreadsheet.avif'
import './Intro.css'


const Intro = () => {
  return (
      <section className="intro" >
          <h1 className="section__title section__title--intro">
              Tic-Tac-Track a comprhensive Tracking and To do app for the modern world
          </h1>
                <img src={SpreadSheet} alt="Hazel looking ahead" class="intro__img" />

  </section>
    )
}

export default Intro