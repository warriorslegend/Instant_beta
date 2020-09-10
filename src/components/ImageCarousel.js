import React from 'react';
import Carousel from '@brainhubeu/react-carousel';

export default function ImageCarousel() {

    const slides = [
        (<img
            key={1}
            src='images/Instant/other/carousel-3.png'
            className='full'
            alt="Entrega en menos de 90 minutos."    
        />),
        (<img
            key={2}
            src='images/Instant/other/carousel-2.png'
            className='full'
            alt="Segunda imagen"
        />)
    ]

    return (
        <Carousel
            infinite
            animationSpeed={1500}
            autoPlay={6500}
            slides={slides}
        />
    );
}
