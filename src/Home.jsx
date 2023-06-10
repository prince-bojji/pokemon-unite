import React from 'react';

function Home() {
  return (
    <>
      <section className='py-20 px-8 sm:px-2 text-white bg-[#6523b6] pb-[calc(var(--padding-vertical) + 4rem)] clip-[polygon(0% 0%, 100% 0%, 100% 95%, 0% 100%)] sm:pt-0'>
        <div className='mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
          <div className='text-center lg:text-left lg:justify-center'>
            <h1
              data-aos='zoom-in-up'
              className='mt-0 text-white text-7xl font-semibold'>
              POKEMON UNITE
            </h1>
            <p className='text-3xl text-gray-400 tracking-wider my-8 font-normal'>
              Available in Playstore
            </p>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://play.google.com/store/apps/details?id=jp.pokemon.pokemonunite&hl=en_US'
              className='bg-red-600 rounded-full border-0 cursor-pointer text-xl font-semibold py-4 px-8 md:px-12 text-center uppercase whitespace-nowrap bg-[var(--color-accent)] text-white hover:bg-red-700 pl-12 pr-12'>
              Download
            </a>
          </div>
          <div data-aos='zoom-in'>
            <picture>
              <source
                type='image/webp'
                srcSet='images/Poke_Ball.webp 1x, images/Poke_Ball 2x'
              />
              <source
                type='image/png'
                srcSet='images/Poke_Ball.png 1x, images/Poke_Ball@2x.png 2x'
              />
              <img src='images/Poke_Ball.png' alt='' />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
