import React from 'react'

function Overview() {
  return (
    <>
    <section
      class="py-20 px-8 bg-purple-800 text-gray-500 pb-[calc(var(--padding-vertical) + 4rem)] clip-path-polygon md:grid-cols-2"
      id="overview"
    >
      <header class="text-center mb-16">
        <h2 class="text-white text-5xl">Why Play Pokemon Unite?</h2>
      </header>
      <div class="mx-auto max-w-[1140px]">
        <ul class="list-none pl-0" data-aos="fade-up">
          <li>
            <div class="flex mb-4">
              <div class="mt-1"></div>
              <div class="ml-2">
                <h3 class="mt-0 text-white text-3xl">Free To Play</h3>
                <p class="text-justify text-gray-400 text-lg">
                  Pokémon Unite is a free-to-play game, which means that players
                  can download and play it without paying anything upfront.
                  While there are in-game purchases available, players can still
                  enjoy the game without spending any money.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="flex mb-4">
              <div class="mt-1"></div>
              <div class="ml-2">
                <h3 class="mt-0 text-white text-3xl">Competitive Gameplay</h3>
                <p class="text-justify text-gray-400 text-lg">
                  Pokémon Unite is a MOBA game, which means that players compete
                  against each other in fast-paced, strategic battles. Players
                  who enjoy competitive gameplay and teamwork may find the game
                  to be challenging and engaging.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="flex mb-4">
              <div class="mt-1"></div>
              <div class="ml-2">
                <h3 class="mt-0 text-white text-3xl">Love for Pokémon</h3>
                <p class="text-justify text-gray-400 text-lg">
                  Pokémon has been a beloved franchise for over 25 years, and
                  many fans of the series may be interested in playing a new
                  game featuring their favorite pocket monsters.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    </>
  )
}

export default Overview