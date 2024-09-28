import { useState, useEffect } from 'react'
import '../styles/CoverFlow.scss'

const images = [
  'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc',
  'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc',
  'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc'
  // 'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc',
  // 'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc',
  // 'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc'
]

const Coverflow = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const totalImages = images.length

  // Calcula el desplazamiento del wrapper para centrar el elemento activo
  const translateX =
    totalImages > 1
      ? -(activeIndex * (300 + 30) - (window.innerWidth / 2 - 150)) // Ajusta según $coverflow-item-width y $coverflow-item-gap
      : 0 // No mover si solo hay una imagen

  // Automáticamente cambia la imagen activa cada 3 segundos si hay más de una imagen
  useEffect(() => {
    if (totalImages > 1) {
      const interval = setInterval(() => {
        setActiveIndex(prevIndex => (prevIndex + 1) % totalImages) // Avanza al siguiente índice
      }, 1500) // Cambiar cada 3 segundos

      return () => clearInterval(interval) // Limpia el intervalo al desmontar el componente
    }
  }, [totalImages])

  return (
    <div className='coverflow'>
      <div
        className={`coverflow__wrapper ${
          images.length === 1 && 'single-image'
        }`}
        style={{ transform: `translateX(${translateX}px)` }}
      >
        {images.map((image, index) => (
          <div
            className={`coverflow__item ${
              index === activeIndex ? 'active' : ''
            }`}
            key={index}
          >
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Coverflow
