import React, { useState } from 'react'


function Item ({info}){
    let [isOpen, setOpen] = useState(false);

    return (
        <section className='p-8 border-b-2 border-gray-700 sm:border-0' onClick={() => setOpen(!isOpen)}>
            <div className='flex justify-between'>
                <h2 className='text-white mt-0 mb-2 text-3xl uppercase font-semibold leading-relaxed sm:text-lg md:text-xl'>{info.item}</h2>
                <svg class="collapsible--chevron" className={`w-10 h-10 transform -rotate-90 transition-transform duration-300  hover:cursor-pointer sm:hidden ${isOpen ? 'transform rotate-0': 1}`}>
                    <use href='images/sprite.svg#chevron'></use>
                </svg>
            </div>
            <div class='collapsible--content' className={`max-h-0 overflow-hidden opacity-0 transition-all duration-300 sm:opacity-100 sm:max-h-full ${isOpen ? 'max-h-full opacity-100': 1}`}>
                <ul className='list-none pl-0 m-0'>
                    <li>
                        <a href={info.anchorLink1} className='text-gray-400 transition-colors duration-300 hover:text-black'
                        >{info.anchorName1}</a>
                    </li>
                    <li>
                        <a href={info.anchorLink2} className='text-gray-400 transition-colors duration-300 hover:text-black'
                        >{info.anchorName2}</a>
                    </li>
                    <li>
                        <a href={info.anchorLink3} className='text-gray-400 transition-colors duration-300 hover:text-black'
                        >{info.anchorName3}</a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

const Footer = () =>{
    
    return(
        <footer className='block py-20 px-8 bg-purple-800 pt-40 md:text-xl sm:text-lg'>
            <div className='grid mx-auto max-w-[1140px] md:grid-cols-5 md:grid-cols-auto-fit md:grid-cols-minmax-10rem-1fr'>
                <Item info={{
                    item:'social',
                    anchorLink1:'https://www.facebook.com/gaming/pokemonunite', anchorName1:'Facebook',
                    anchorLink2:'https://www.instagram.com/pokemon_unite_official.in/', anchorName2:'Instagram',
                    anchorLink3:'https://twitter.com/PokemonUnite', anchorName3:'Twitter'}}
                />
                <Item info={{
                    item:'company',
                    anchorLink1:'https://unite.pokemon.com/en-us/', anchorName1:'About',
                    anchorLink2:'https://corporate.pokemon.com/en-us/about/', anchorName2:'Affiliates',
                    anchorLink3:'https://www.pokemon.com/us', anchorName3:'Blog'
                }}
                />
                <Item info={{
                    item:'contact us', 
                    anchorLink1:'#', anchorName1:'(+63)9122237027',
                    anchorLink2:'#', anchorName2:'pokemonunite@yahoo.com',
                    anchorLink3:'#', anchorName3:'Telegram'
                }}
                />
                <Item info={{
                    item:'support',
                    anchorLink1:'#', anchorName1:'Contact',
                    anchorLink2:'#', anchorName2:'Knowledge Base',
                    anchorLink3:'#', anchorName3:'FAQ'
                }}
                />
                <div className='mt-20 text-center md:order-first md:mt-4'>
                    <img src="images/logotemp.svg" alt="" className='max-w-230' />
                    <p className='text-2xl text-black md:text-lg'>Copyright 2023 Pokemon Unite</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;