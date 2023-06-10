import React from 'react'

function Feedback() {
  return (
    <>
    <body class='bg-[#ffb22e]'>
    <section class="py-20 px-2" data-aos="zoom-in" id="feedback">
      <header class="text-center mb-16">
        <h2 class='text-5xl text-[#1b0760]'>What our Players are Saying</h2>
      </header>
      <div class="mx-auto max-w-7xl">
        <div class="rounded-xl border-4 p-12">
          <div class="grid grid-cols-1 sm:grid-cols-2">
            <div class="relative mx-3 md:m-0">
              <img src="images/squad.jpeg" alt="A happy, smiling customer" />
              <span class="absolute top-12 right-[-32px] bg-[#ff3400] w-16 h-16 rounded-full inline-flex justify-center items-center">
                <svg class="w-10 h-10">
                  <use href="images/sprite.svg#quotes"></use>
                </svg>
              </span>
            </div>
            <blockquote class="md:mt-20 md:ml-24 text-lg md:text-xl leading-relaxed">
              <p class="before-quotes after-quotes text-justify text-[#5c5577]">
                Pokémon Unite is an engaging and exciting MOBA game with
                strategic battles and fast-paced action. The graphics and sound
                design are impressive, and the game does a good job of
                introducing new players to the genre. However, the matchmaking
                algorithm could be improved, and the reporting system for toxic
                behavior could be better. Overall, Pokémon Unite has a lot of
                potential for future growth and improvement and is a fun and
                enjoyable multiplayer experience.
              </p>
              <footer>
                <div class="media mb-4">
                  <div class="mt-4">
                  </div>
                  <div class="mx-8">
                    <h3 class="mt-0 text-2xl font-normal mb-0">Mortals Squad</h3>
                    <p class="text-[#1b0760] opacity-40 text-lg font-normal">Pro Players</p>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
    </body>
    </>
  )
}

export default Feedback