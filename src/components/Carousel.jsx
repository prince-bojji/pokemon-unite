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
    const [isForward, setForward] = useState(true);
    const timeoutRef = useRef(null);

    const goForward = () => {
        setForward(true);
        setIndex((index + 1) % images.length);
    }

    const goBack = () => {
        setForward(false);
        setIndex((index - 1 + images.length) % images.length);
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
        <div className='relative flex w-full h-full overflow-hidden animate-waving-hand'>
            <div className={`duration-500 ease-in-out`}>
                <img src={images[index]} className="w-full h-full object-cover" />
            </div>
            <div className='absolute top-1/2 p-1 flex justify-between align-middle w-full transform -translate-y-1/2'>
                <div className='text-white text-4xl md:text-5xl' onClick={goBack}>
                    <ion-icon name="caret-back-circle"></ion-icon>
                </div>
                <div className='text-white text-4xl md:text-5xl' onClick={goForward}>
                    <ion-icon name="caret-forward-circle"></ion-icon>
                </div>
            </div>
        </div>
    )
}

export default Carousel