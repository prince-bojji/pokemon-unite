import React from 'react'
import Carousel from './Carousel'

const Feedback = () => {
  return (
    <section className='flex flex-col items-center w-screen py-20 px-2 bg-[#ffb22e]' id='feedback'>
      <h2 className='text-5xl text-[#1b0760] animate-waving-hand'>Players Gallery</h2>
      <div className='max-w-7xl rounded-xl border-4 p-10 m-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='relative mx-3 md:m-0'>
            <Carousel />
          </div>
          <blockquote className='my-auto lg:ml-14 text-lg lg:text-xl leading-relaxed'>
            <p className='before-quotes after-quotes text-justify text-[#5c5577]'>
              Pokémon Unite is an engaging and exciting MOBA game with
              strategic battles and fast-paced action. The graphics and
              sound design are impressive, and the game does a good job of
              introducing new players to the genre. However, the matchmaking
              algorithm could be improved, and the reporting system for
              toxic behavior could be better. Overall, Pokémon Unite has a
              lot of potential for future growth and improvement and is a
              fun and enjoyable multiplayer experience.
            </p>
            <footer>
              <div className='flex my-4'>
                <span className='bg-[#ff3400] w-16 max-w-full h-16 rounded-full inline-flex justify-center items-center'>
                  <svg className='w-10 h-10'>
                    <use href='images/sprite.svg#quotes'></use>
                  </svg>
                </span>
                <div className='ml-3'>
                  <h3 className='mt-0 text-2xl font-normal mb-0'>
                    Mortals Squad
                  </h3>
                  <p className='text-[#1b0760] opacity-40 text-lg font-normal'>
                    Pro Players
                  </p>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default Feedback