import React from 'react';
import Slider from 'react-slick';
import './ImageSlider.css'; // Create this CSS file for styling

const images = [
  {
    id: 1,
    title: 'Image 1',
    description: 'Description for Image 1',
    imageUrl: 'image1.jpg',
  },
  {
    id: 2,
    title: 'Image 2',
    description: 'Description for Image 2',
    imageUrl: 'image2.jpg',
  },
  {
    id: 3,
    title: 'Image 3',
    description: 'Description for Image 3',
    imageUrl: 'image3.jpg',
  },
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id}>
            <div className="image-slide">
              <img src={image.imageUrl} alt={image.title} />
              <div className="image-overlay">
                <h2>{image.title}</h2>
              </div>
            </div>
            <div className="image-description">
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
