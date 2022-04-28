import { Fragment, useEffect, useState } from 'react';
import CarouselCard from './CarouselCard';

import banner1 from '../../../Data/Carousel/banner1.png';
import banner2 from '../../../Data/Carousel/banner2.png';
import banner3 from '../../../Data/Carousel/banner3.png';

const HeaderSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const banner = [banner1, banner2, banner3];

    useEffect(() => {
        setTimeout(() => {
            setCurrentIndex((currentIndex + 1) % banner.length);
        }, 4000);
    }, [banner.length, currentIndex]);

    return (
        <div className="mt-8 mb-8 flex max-h-96 min-h-[20rem] w-full bg-gray-100 text-gray-900">
            {banner.map((item, index) => (
                <Fragment key={index}>
                    {currentIndex === index && (
                        <CarouselCard carouselImage={banner[currentIndex]} />
                    )}
                </Fragment>
            ))}
        </div>
    );
};

export default HeaderSection;
