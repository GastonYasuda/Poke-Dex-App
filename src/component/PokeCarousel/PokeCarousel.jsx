import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';


const PokeCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://asset.watch.impress.co.jp/img/gmw/docs/1253/657/1_o.jpg"
                    alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://asset.watch.impress.co.jp/img/gmw/docs/1253/657/2_o.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://asset.watch.impress.co.jp/img/gmw/docs/1253/657/3_o.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>

        </Carousel>
    )
}

export default PokeCarousel