import { useState, useEffect } from 'react';

const ProductImage = ({ props }) => {
    const { photos, name } = props;
    const [imageUrl, setImageUrl] = useState('');

    const changeImage = (event) => {
        setImageUrl(photos[event.target.name].secure_url);
    };

    useEffect(() => {
        setImageUrl(photos ? photos[0].secure_url : '');
    }, [photos]);

    return (
        <>
            <div className="h-auto w-full shadow-lg lg:h-96 lg:w-1/2">
                <div className="h-56 w-full bg-gray-100 sm:h-60 lg:h-[18.5rem]">
                    <img
                        className="mx-auto h-full w-full rounded-md object-contain"
                        src={imageUrl}
                        alt={name}
                        loading="lazy"
                    />
                </div>
                <div className="flex w-full lg:py-3">
                    {photos &&
                        photos.map((element, index) => (
                            <img
                                loading="lazy"
                                className="mx-auto w-1/4 cursor-pointer rounded-md object-cover lg:h-[70%]"
                                src={element.secure_url}
                                alt={name}
                                key={index}
                                name={index}
                                onClick={changeImage}
                            />
                        ))}
                    {/* <img
                        loading="lazy"
                        className="mx-auto w-1/3 rounded-md  object-cover lg:h-[70%]"
                        src="images/1.png"
                        alt="Nike Air"
                    />
                    <img
                        loading="lazy"
                        className="mx-auto w-1/3 rounded-md  object-cover lg:h-[70%]"
                        src="images/1.png"
                        alt="Nike Air"
                    /> */}
                </div>
            </div>
        </>
    );
};

export default ProductImage;
