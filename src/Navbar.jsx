import React from 'react'

function Navbar() {
  return (
    <>
    <header>
        <nav class="nav collapsible">
            <a aria-label="Pokemon Unite" class="nav__brand" href="/">
                <img src="images/logotemp.svg" alt=""/>
            </a>
            <svg class="icon icon--white nav__toggler">
                <use href="images/sprite.svg#menu"></use>
            </svg>
            <ul class="list nav__list collapsible__content">
                <li class="nav__item">
                    <a target="_blank" href="#">Home</a>
                </li>
                <li class="nav__item">
                    <a target="_blank" href="#overview">Overview</a>
                </li>
                <li class="nav__item">
                    <a target="_blank" href="#new-release">New Release</a>
                </li>
                <li class="nav__item">
                    <a target="_blank" href="#feedback">Feedback</a>
                </li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Navbar;