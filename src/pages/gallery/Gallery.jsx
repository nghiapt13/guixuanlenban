import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleChevronLeft,
    faCircleChevronRight,
    faCircleXmark
} from '@fortawesome/free-solid-svg-icons'

import './gallery.css'

const Gallery = ({ galleryImages }) => {

    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true)
    }


    // Close Modal
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    // Add event listener to listen for "keydown" events on the document
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') { // Check if the "Esc" key was pressed
            handleCloseModal() // Call the function to close the modal
        }
    })




    // Previous Image
    const prevSlide = () => {
        if (slideNumber === 0) {
            // Already at the first slide, do nothing
            return
        }
        slideNumber === 0
            ? setSlideNumber(galleryImages.length - 1)
            : setSlideNumber(slideNumber - 1)
    }
    // Add event listener to listen for "keydown" events on the document
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') { // Check if the "Esc" key was pressed
            prevSlide() // Call the function to close the modal
        }
    })

    // Next Image  
    const nextSlide = () => {
        if (slideNumber === galleryImages.length - 1) {
            // Already at the last slide, do nothing
            return
        }
        slideNumber + 1 === galleryImages.length
            ? setSlideNumber(0)
            : setSlideNumber(slideNumber + 1)
    }
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') { // Check if the "Esc" key was pressed
            nextSlide() // Call the function to close the modal
        }
    })

    return (
        <div>
            {openModal &&
                <div className='sliderWrap'>
                    <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal} />
                    <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide} />
                    <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide} />
                    <div className='fullScreenImage'>
                        <img src={galleryImages[slideNumber].img} alt='' />
                    </div>
                </div>
            }

            {/* <br />
      Current slide number:  {slideNumber}
      <br />
      Total Slides: {galleryImages.length}
      <br /><br /> */}

            <div className='galleryWrap'>
                {
                    galleryImages && galleryImages.map((slide, index) => {
                        return (
                            <div
                                className='single'
                                key={index}
                                onClick={() => handleOpenModal(index)}
                            >
                                <img src={slide.img} alt='' />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Gallery