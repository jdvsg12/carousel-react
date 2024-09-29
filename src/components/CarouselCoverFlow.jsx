import { useState, useEffect } from 'react'
import '../styles/CoverFlow.scss'

const images = [
  './public/images/1.png',
  './public/images/2.png',
  './public/images/3.png',
  './public/images/4.jpg'
]

const Coverflow = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const totalImages = images.length
  const windowWidth = window.innerWidth
  const widthImages = windowWidth / images.length
  // Calcula el desplazamiento del wrapper para centrar el elemento activo
  const translateX =
    totalImages > 1
      ? -(
          activeIndex * widthImages +
          30 -
          (windowWidth / 2 - widthImages / 2 + 50)
        )
      : 0 // No mover si solo hay una imagen

  const cycleSelection = (arr, interval) => {
    setInterval(() => {
      // Remove the last element and move it to the start to "rotate" the array
      const newArr = [...arr]
      const lastItem = newArr.pop()
      if (lastItem) {
        newArr.unshift(lastItem)
      }

      // Ensure only the third item (index 2) has isSelected: true, others false
      const updatedItems = newArr.map((item, index) => ({
        ...item,
        isSelected: index === 2 // Only the item at index 2 should be selected
      }))
      console.log(arr)

      // Update the array with the modified array
      arr = updatedItems
    }, interval)
  }

  cycleSelection(images, 1500)

  // Automáticamente cambia la imagen activa cada 3 segundos si hay más de una imagen
  useEffect(() => {
    if (totalImages > 1) {
      const interval = setInterval(() => {
        setActiveIndex(prevIndex => (prevIndex + 1) % totalImages)
      }, 1500)
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
