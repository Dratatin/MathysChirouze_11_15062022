import { useState } from "react"
import arrow from "../assets/sliderarrow.svg"

const Slider = ({tabimages}) => {
    const [slideIndex, setSlideIndex] = useState(0)
    const nextSlide = () => {
        if (slideIndex !== (tabimages.length - 1)) {
            setSlideIndex(slideIndex + 1)
        }
        else {
            setSlideIndex(0)
        }
    }
    const previousSlide = () => {
        if (slideIndex !== 0) {
            setSlideIndex(slideIndex - 1)
        }
        else {
            setSlideIndex(tabimages.length - 1)
        }
    }
    return (
        <div className="slider">
            <div className="slider__content">
                <img src={tabimages[slideIndex]} alt="menfou pas lu" />
            </div>
            <div className="slider__count">
                    {slideIndex + 1}/{tabimages.length}
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