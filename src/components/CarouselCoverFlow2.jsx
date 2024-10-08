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
  },
  {
    url: 'https://fastly.picsum.photos/id/14/2500/1667.jpg?hmac=ssQyTcZRRumHXVbQAVlXTx-MGBxm6NHWD3SryQ48G-o',
    alt: 'Image 1'
  }
]

const Coverflow2 = () => {
  const [visibleImages, setVisibleImages] = useState([0, 1, 2])
  const totalImages = initialImages.length

  useEffect(() => {
    if (totalImages > 1) {
      const interval = setInterval(() => {
        setVisibleImages(prev => {
          const newIndex = (prev[0] + 1) % totalImages
          return prev.map((_, i) => (newIndex + i) % totalImages)
        })
      }, 2000) // Intervalo de tiempo para cambiar la imagen

      return () => clearInterval(interval) // Limpia el intervalo al desmontar el componente
    }
  }, [totalImages])

  const handleVisibleImages = () => {
    if (totalImages === 1) {
      return [0]
    } else if (totalImages === 2) {
      return visibleImages.slice(0, 2)
    } else {
      return visibleImages // Para 3 o más imágenes, muestra las 3 con animación
    }
  }

  const currentImages = handleVisibleImages()

  return (
    <div className={`coverflow ${totalImages === 1 ? 'single-image' : ''}`}>
      <div className='coverflow__wrapper'>
        {currentImages.map((index, i) => (
          <div
            className={`
            ${totalImages === 1 ? 'single-image' : ''} 
            ${totalImages === 2 ? 'coverflow__item_twoChild' : ''} 
            ${totalImages >= 3 && 'coverflow__item'} 
            ${i === 1 ? 'active' : ''}  `} // La imagen del medio es la activa
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
