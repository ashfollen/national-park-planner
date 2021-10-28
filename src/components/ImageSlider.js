import { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

function ImageSlider({images}) {
    
    const [current, setCurrent] = useState(0)
    const length = images.length 

    function nextSlide() {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    function prevSlide() {
        setCurrent(current === 0 ? length - 1 : current -1)
    }

    return(
        <div className="slider">
            <FaArrowLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowRight className="right-arrow" onClick={nextSlide} />
            {images.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            <img src={slide.url} alt={slide.altText} className="image"/>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default ImageSlider;