import React, {useEffect, useState} from "react";
import {DataGoogle} from "@/sanity/types/componentTypes";
import FetchImages from "@/app/api/fetch/FetchImages";
import Slider from "react-slick";

interface CarouselProps{
folderId: string;
}
const Carousel: React.FC<CarouselProps> = ({ folderId }) => {
    const [images, setImages] = useState<DataGoogle[]>([]);

    useEffect(() => {
        if (folderId) {
            FetchImages(folderId).then((fetchedImages) => {
                setImages(fetchedImages);
            });
        }
    }, [folderId]);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 640, // Tailwind sm
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768, // Tailwind md
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1024, // Tailwind lg
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1280, // Tailwind xl
                settings: {
                    slidesToShow: 5,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {images.map((image) => (
                <img key={image.id} src={image.thumbnailLink} alt={image.name} />
            ))}
        </Slider>
    );
};

export default Carousel;