import { useState, useEffect } from 'react'
import '../styles/CoverFlow2.scss'

const initialImages = [
  {
    url: 'https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4',
    alt: 'Image 1'
  },
  {
    url: 'https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ',
    alt: 'Image 1'
  }
]

const Coverflow2 = () => {
  const VISIBLE_IMAGE_INDEX = [0, 1, 2]
  const VISIBLE_ONE_IMAGE = [0]
  const ANIMATE_DELAY = 2000
  const [visibleImages, setVisibleImages] = useState(VISIBLE_IMAGE_INDEX)
  const totalImages = initialImages.length

  useEffect(() => {
    if (totalImages > 1) {
      const interval = setInterval(() => {
        setVisibleImages(prev => {
          const newIndex = (prev[0] + 1) % totalImages
          return prev.map((_, i) => (newIndex + i) % totalImages)
        })
      }, ANIMATE_DELAY) // Intrval timeout animation

      return () => clearInterval(interval) // Clean interval
    }
  }, [totalImages])

  const handleVisibleImages = () => {
    if (totalImages === 1) {
      return VISIBLE_ONE_IMAGE
    } else if (totalImages === 2) {
      return visibleImages.slice(0, 2)
    } else {
      return visibleImages // 3 elements or more...
    }
  }

  const currentImages = handleVisibleImages()

  return (
    <div className={`coverflow ${totalImages === 1 ? 'single-image' : ''}`}>
      <div className='wrapper'>
        {currentImages.map((index, i) => (
          <div
            className={`
            ${totalImages === 1 ? 'single-image' : ''} 
            ${totalImages === 2 ? 'item_twoChild' : ''} 
            ${totalImages >= 3 && 'item'} 
            ${i === 1 ? 'active' : ''}  `}
            key={index}
          >
            <img
              src={initialImages[index].url}
              alt={initialImages[index].alt}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Coverflow2
