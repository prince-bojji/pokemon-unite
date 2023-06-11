import React from 'react';

function ReleaseItem({ title, price, image, features }) {
  return (
    <div className='transition-transform duration-200 ease-out hover:scale-105'>
      <div className='rounded-xl border-4 bg-[#ffb22e]'>
        <header className='bg-[#00d9ff] text-white px-7 py-2'>
          <h3 className='text-white font-medium text-2xl'>{title}</h3>
          <span className='text-5xl'>{price}</span>
          <span className='text-base font-light opacity-8 px-50 mr-4'>
            Aeos Coins
          </span>
          <span className='text-base font-light tracking-wide leading-normal'>
            <img src={image} alt={title} />
          </span>
        </header>
        <div className='px-7 py-2'>
          <ul className='list-none pl-12 text-[#1b0760]'>
            {features.map((feature, index) => (
              <li key={index} className='mb-8 px-5 flex items-center'>
                <img
                  className='mr-2'
                  src='images/tick.svg'
                  alt='Tick'
                />
                {feature}
              </li>
            ))}
          </ul>
          <button className='rounded-full cursor-pointer text-xl font-semibold my-4 px-4 text-center uppercase whitespace-nowrap bg-[#fff] hover:bg-[#1b0760] hover:text-[#fff] text-[#1b0760] border-2 border-[#1b0760] w-full py-4 inline-block'>
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

function Release() {
  const releases = [
    {
      title: 'Lapras',
      price: '12k',
      image: 'images/lapras.svg',
      features: ['High Durability', 'High Damage', 'High Sustain', 'Great Scaling']
    },
    {
      title: 'Zacian',
      price: '15k',
      image: 'images/zacian.svg',
      features: ['High Damage Output', 'Cooldown Reduction', 'Great Scaling', 'High Durability']
    },
    {
      title: 'Goodra',
      price: '12k',
      image: 'images/goodra.svg',
      features: ['High Durability', 'Cooldown Reduction', 'Melee and Range', 'High Damage']
    }
  ];

  return (
    <body className='bg-[#ffb22e]'>
      <section
        data-aos='fade-up'
        className='py-[5rem] px-2  mx-auto max-w-[1140px]'
        id='new-release'>
        <div className='grid md:grid-cols-3 gap-x-4'>
          {releases.map((release, index) => (
            <ReleaseItem key={index} {...release} />
          ))}
        </div>
      </section>
    </body>
  );
}

export default Release;
