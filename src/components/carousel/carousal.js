import React, { useState } from 'react'
import './Slider.css'
import BtnSlider from './btnSlider'
import dataSlider from './dataSlider'

export default function Slider() {
    // useEffect(() => {
    //     setInterval(async () => {
    //         // if (slideIndex !== dataSlider.length) {
    //         //     await setSlideIndex(slideIndex + 1)
    //         // }
    //         // else if (slideIndex === dataSlider.length) {
    //         //     await setSlideIndex(1)
    //         // }
    //         slideIndex !== dataSlider.length ? setSlideIndex(slideIndex+1) : slideIndex === dataSlider.length?setSlideIndex(1):setSlideIndex(1)
    //     }, 6000);

    //     // return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    // }, [])
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        debugger
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
    }
   
    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    
    return (
        <div style={{ position: 'relative' }}>
            <div className="container-slider">
                {dataSlider.map((obj, index) => {
                    return (
                        <div
                            key={obj.id}
                            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                        >
                            <img
                                src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.png`}
                            />
                        </div>
                    )
                })}
            </div>
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
            
            <div className="container-dots">
                {Array.from({ length: 5 }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}
