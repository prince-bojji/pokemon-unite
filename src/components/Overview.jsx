import React from 'react';

function Overview() {
  const ListItem = ({ title, description }) => (
    <li>
      <div className='flex mb-4'>
        <div className='mt-1'></div>
        <div className='ml-2'>
          <h3 className='mt-0 text-white text-3xl'>{title}</h3>
          <p className='text-justify text-gray-400 text-lg'>{description}</p>
        </div>
      </div>
    </li>
  );

  return (
    <section
      className='py-20 px-8 bg-purple-800 text-gray-500 pb-[calc(var(--padding-vertical) + 4rem)] clip-path-polygon md:grid-cols-2'
      id='overview'
    >
      <header className='text-center mb-16'>
        <h2 className='text-white text-5xl'>Why Play Pokemon Unite?</h2>
      </header>
      <div className='mx-auto max-w-[1140px]'>
        <ul className='list-none pl-0' data-aos='fade-up'>
          <ListItem
            title='Free To Play'
            description='Pokémon Unite is a free-to-play game, which means that players can download and play it without paying anything upfront. While there are in-game purchases available, players can still enjoy the game without spending any money.'
          />
          <ListItem
            title='Competitive Gameplay'
            description='Pokémon Unite is a MOBA game, which means that players compete against each other in fast-paced, strategic battles. Players who enjoy competitive gameplay and teamwork may find the game to be challenging and engaging.'
          />
          <ListItem
            title='Love for Pokémon'
            description='Pokémon has been a beloved franchise for over 25 years, and many fans of the series may be interested in playing a new game featuring their favorite pocket monsters.'
          />
        </ul>
      </div>
    </section>
  );
}

export default Overview;
