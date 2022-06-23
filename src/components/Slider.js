import { useState } from "react"
import arrow from "../assets/sliderarrow.svg"

const Slider = ({tabimages}) => {
    const [slideIndex, setSlideIndex] = useState(0)
    const nextSlide = () => {
        setSlideIndex(slideIndex + 1)
    }
    const previousSlide = () => {
        setSlideIndex(slideIndex - 1)
    }
    return (
        <div className="slider">
            <div className="slider__content">
                <img src={tabimages[slideIndex]} alt="menfou pas lu" />
            </div>
            <div className="slider__count">
                    1/4
            </div>
            <button className="slider__arrowleft" onClick={previousSlide}>
                <img src={arrow} alt="flèche vers la gauche" />
            </button>
            <button className="slider__arrowright" onClick={nextSlide}>
                <img src={arrow} alt="flèche vers la droite" />
            </button>
        </div>
    )
}

export default Slider