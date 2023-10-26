import React, { useState } from 'react'
import './Slider.scss'
import { EastOutlined, WestOutlined } from '@mui/icons-material'


const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/10003451/pexels-photo-10003451.jpeg',
    ]

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
    }

  return (
    <div className="slider">
        <div className="container" style={{
            transform:`translateX(-${currentSlide * 100}vw)`
        }}>
            <img src={data[0]} alt='' />
            <img src={data[1]} alt='' />
            <img src={data[2]} alt='' />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestOutlined />
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastOutlined />
            </div>
        </div>
    </div>
  )
}

export default Slider