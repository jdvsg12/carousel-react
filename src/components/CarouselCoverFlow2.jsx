import { useState, useEffect } from 'react'
import '../styles/CoverFlow2.scss'

const initialImages = [
  { url: './public/images/1.png', alt: 'Image 1' },
  { url: './public/images/2.png', alt: 'Image 1' },
  { url: './public/images/3.png', alt: 'Image 1' },
  { url: './public/images/5.png', alt: 'Image 1' },
  { url: './public/images/6.png', alt: 'Image 1' },
  { url: './public/images/7.png', alt: 'Image 1' }
]

const Coverflow2 = () => {
  const [visibleImages, setVisibleImages] = useState([0, 1, 2]) // Muestra las imágenes visibles
  const totalImages = initialImages.length

  // Efecto para manejar la rotación de imágenes
  useEffect(() => {
    if (totalImages > 1) {
      const interval = setInterval(() => {
        setVisibleImages(prev => {
          const newIndex = (prev[0] + 1) % totalImages // Solo actualizar el primer índice
          return prev.map((_, i) => (newIndex + i) % totalImages) // Rotar imágenes visibles
        })
      }, 2000) // Intervalo de tiempo para cambiar la imagen

      return () => clearInterval(interval) // Limpia el intervalo al desmontar el componente
    }
  }, [totalImages])

  // Manejo de casos con 1, 2 o 3+ imágenes
  const handleVisibleImages = () => {
    if (totalImages === 1) {
      return [0] // Muestra la única imagen sin animación
    } else if (totalImages === 2) {
      return visibleImages.slice(0, 2) // Muestra solo las dos imágenes y continúa la animación
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
            className={`${
              totalImages === 1 ? 'single-image' : 'coverflow__item'
            } ${i === 1 ? 'active' : ''}  `} // La imagen del medio es la activa
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
