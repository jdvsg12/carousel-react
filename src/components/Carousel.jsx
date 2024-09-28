import '../styles/Carousel.scss'

const imageData = [
  {
    url: 'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc',
    alt: 'Image 1'
  },
  {
    url: 'https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE',
    alt: 'Image 2'
  },
  {
    url: 'https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I',
    alt: 'Image 3'
  },
  {
    url: 'https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE',
    alt: 'Image 2'
  },
  {
    url: 'https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE',
    alt: 'Image 2'
  }
]

function Carousel () {
  const totalImages = imageData.length
  const angle = 360 / totalImages
  return (
    <>
      <div className='carousel'>
        <div
          className={`carousel-container ${
            imageData.length > 1 && 'has-multiple-images'
          }`}
        >
          {imageData.map((image, index) => (
            <div
              key={index}
              className='slide'
              style={{
                transform:
                  totalImages > 1
                    ? `rotateY(${angle * index}deg) translateZ(250px)`
                    : ''
              }}
            >
              <img src={image.url} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Carousel
