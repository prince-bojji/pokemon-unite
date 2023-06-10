import React from 'react';

function Release() {
  return (
    <>
      <body class='bg-[#ffb22e]'>
        <section
          data-aos='fade-up'
          class='py-[5rem] px-2  mx-auto max-w-[1140px]'
          id='new-release'>
          <div class='grid md:grid-cols-3 gap-x-4'>
            <div class='transition-transform duration-200 ease-out hover:scale-105'>
              <div class='rounded-xl border-4 bg-[#ffb22e]'>
                <header class='bg-[#00d9ff] text-white px-7 py-2'>
                  <h3 class='text-white font-medium text-2xl'>Lapras</h3>
                  <span class='text-5xl'>12k</span>
                  <span class='text-base font-light opacity-8 px-50 mr-4'>
                    Aeos Coins
                  </span>
                  <span class='text-base font-light tracking-wide leading-normal'>
                    <img src='images/lapras.svg' alt='Lapras' />
                  </span>
                </header>
                <div class='px-7 py-2'>
                  <ul class='list-none pl-12 text-[#1b0760]'>
                    <img class='absolute py-2 px-0' src='images/tick.svg'/>
                    <li class='mb-8 px-5'>High Durability</li>
                    <img class='absolute py-2 px-0' src='images/tick.svg'/>
                    <li class='mb-8 px-5'>High Damage</li>
                    <img class='absolute py-2 px-0' src='images/tick.svg'/>
                    <li class='mb-8 px-5'>High Sustain</li>
                    <img class='absolute py-2 px-0' src='images/tick.svg'/>
                    <li class='mb-8 px-5'>Great Scaling</li>
                  </ul>
                  <button class='rounded-full cursor-pointer text-xl font-semibold my-4 px-4 text-center uppercase whitespace-nowrap bg-[#fff] hover:bg-[#1b0760] hover:text-[#fff] text-[#1b0760] border-2 border-[#1b0760] w-full py-4  inline-block'>
                    More Info
                  </button>
                </div>
              </div>
            </div>
            <div class='transition-transform duration-200 ease-out hover:scale-105'>
              <div class='rounded-xl border-4 bg-[#ffb22e]'>
                <header class='bg-[#2584ff] text-white px-7 py-2'>
                  <h3 class='text-white font-medium text-2xl'>Zacian</h3>
                  <span class='text-5xl'>15k</span>
                  <span class='text-base font-light opacity-8 px-50 mr-4'>
                    Aeos Coins
                  </span>
                  <span class='text-base font-light tracking-wide leading-normal'>
                    <img src='images/zacian.svg' alt='Zacian' />
                  </span>
                </header>
                <div class='px-7 py-2'>
                  <ul class='list-none pl-12 text-[#1b0760]'>
                  <img class='absolute py-2 px-0' src='images/tick.svg'/>
                    <li class='mb-8 px-5'>High Damage Output</li>
                    <img class='absolute py-2 px-0' src='images/tick.svg'/>
                    <li class='mb-8 px-5'>Cooldown Reduction</li>
                    <img class='absolute py-2 px-0' src='images/tick.svg'/>
                    <li class='mb-8 px-5'>Great Scaling</li>
                    <img class='absolute py-2 px-0' src='images/tick.svg'/>
                    <li class='mb-8 px-5'>High Durability</li>
                  </ul>
                  <button class='rounded-full cursor-pointer text-xl font-semibold my-4 px-4vw text-center uppercase whitespace-nowrap bg-[#fff] hover:bg-[#1b0760] hover:text-[#fff] text-[#1b0760] border-2 border-[#1b0760] w-full py-4 inline-block'>
                    More Info
                  </button>
                </div>
              </div>
            </div>
            <div class='transition-transform duration-200 ease-out hover:scale-105'>
              <div class='rounded-xl border-4 bg-[#ffb22e]'>
                <header class='bg-[#00d9ff] text-white px-7 py-2'>
                  <h3 class='text-white font-medium text-2xl'>Goodra</h3>
                  <span class='text-5xl'>12k</span>
                  <span class='text-base font-light opacity-8 px-50 mr-4'>
                    Aeos Coins
                  </span>
                  <span class='text-base font-light tracking-wide leading-normal'>
                    <img src='images/goodra.svg' alt='Goodra' />
                  </span>
                </header>
                <div class='px-7 py-2'>
                  <ul class='list-none pl-12 text-[#1b0760]'>
                  <img class='absolute py-2 px-0' src='images/tick.svg'/>
                    <li class='mb-8 px-5'>High Durability</li>
                    <img class='absolute py-2 px-0' src='images/tick.svg'/>
                    <li class='mb-8 px-5'>Coooldown Reduction</li>
                    <img class='absolute py-2 px-0' src='images/tick.svg'/>
                    <li class='mb-8 px-5'>Melee and Range</li>
                    <img class='absolute py-2 px-0' src='images/tick.svg'/>
                    <li class='mb-8 px-5'>High Damage</li>
                  </ul>
                  <button class='rounded-full cursor-pointer text-xl font-semibold my-4 px-4vw text-center uppercase whitespace-nowrap bg-[#fff] hover:bg-[#1b0760] hover:text-[#fff] text-[#1b0760] border-2 border-[#1b0760] w-full py-4  inline-block'>
                    More Info
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default Release;
