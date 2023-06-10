import React, { useState } from 'react'
import pokemon_logo from '../assets/pokemon_logo.png'

const MenuItem = ({name, link}) => {
    return (
    <li className='border-0 md:px-7 px-3 py-2 text-gray-300 hover:text-white '>
        <a href={link}>{name}</a>
    </li>
    )
}

const Navbar = () => {
    let [isOpen, setOpen] = useState(false);

    return (
    <header className='z-30 w-full'>
        <nav className='flex flex-wrap justify-between items-center bg-[#6523b6] px-4 py-4'>
            <a href='/'>
                <img className='h-10 max-h-full w-auto' src={pokemon_logo} alt='Logo'/>
            </a>
            <div className='md:hidden w-5 flex justify-center cursor-pointer text-4xl text-yellow-400' onClick={() => setOpen(!isOpen)}>
                <ion-icon name={isOpen ? 'close' : 'menu'}></ion-icon>
            </div>
            <ul className={`md:flex md:w-max m-0 w-full list-none overflow-hidden transition-all duration-300 ${isOpen ? 'h-max pt-3 md:pt-0' : 'h-0 md:h-auto'}`}>
                <MenuItem name={'Home'} link={'#'} />
                <MenuItem name={'Overview'} link={'#overview'} />
                <MenuItem name={'New Release'} link={'#new-release'} />
                <MenuItem name={'Feedback'} link={'#feedback'} />
            </ul>
        </nav>
    </header>
    )
}

export default Navbar