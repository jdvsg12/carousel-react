import { useState, useEffect } from 'react'
import '../styles/CoverFlow.scss'

const images = [
  'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc',
  'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc',
  'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc',
  'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc',
  'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc',
  'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc'
]

const Coverflow = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const moveCoverflow = () => {
    setCurrentIndex(prevIndex => {
      const newIndex = prevIndex + 1
      return newIndex >= images.length ? 0 : newIndex // Volver al inicio
    })
  }

  // Desplazamiento automático
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        moveCoverflow()
      }
    }, 3000) // Cambiar cada 3 segundos

    return () => clearInterval(interval) // Limpiar el intervalo al desmontar
  }, [isPaused])

  return (
    <div
      className='coverflow'
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className='coverflow__wrapper'
        style={{ transform: `translateX(-${currentIndex * 200}px)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`coverflow__item ${
              index === currentIndex ? 'active' : ''
            }`}
          >
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Coverflow
