import React, { useState, useEffect, useRef } from 'react'

const Carousel = () => {
    const images = [
        'images/carousel/pic-1.jpg',
        'images/carousel/pic-2.jpg',
        'images/carousel/pic-3.jpg',
        'images/carousel/pic-4.jpg',
        'images/carousel/pic-5.jpg'
    ]

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    const goForward = () => {
        setIndex((index + 1) % images.length);
    }

    const goBack = () => {
        setIndex((index - 1 + images.length) % images.length);
    }

    const goToSlide = (index) => {
        setIndex(index);
    }

    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(goForward, 3000);
        return () => {resetTimeout()};
    }, [index]); 

    return (
        <div className='relative flex w-full h-full overflow-hidden rounded-2xl'>
            <div 
                className='flex transition-transform ease-out duration-300' 
                style={{ transform: `translateX(-${index * 100}%)`}}
            >
                {images.map((image) => (<img src={image} className='object-cover' />))}
            </div>
            <div className='absolute inset-2 flex justify-between items-center'>
                <button className='text-white text-4xl md:text-5xl transition-all hover:scale-150' onClick={goBack}>
                    <ion-icon name="caret-back-circle"></ion-icon>
                </button>
                <button className='text-white text-4xl md:text-5xl transition-all hover:scale-150' onClick={goForward}>
                    <ion-icon name="caret-forward-circle"></ion-icon>
                </button>
            </div>
            <div className='absolute inset-x-0 bottom-2 sm:bottom-5'>
                <div className='flex justify-center gap-2'>
                    {
                        images.map((_, i) => (
                            <button 
                            key={i} 
                            onClick={() => goToSlide(i)}
                            className={`w-3 h-1.5 sm:w-5 rounded-sm bg-white transition-all ${index === i ? 'w-6 sm:w-8' : 'opacity-60'}`}></button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Carousel