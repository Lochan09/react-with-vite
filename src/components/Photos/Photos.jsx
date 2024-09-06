import React, { useState, useRef } from 'react';
import './Photos.css';


const Photos = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const photoGridRef = useRef(null);

  const photos = [
    { url: '../../assets/engagement.jpg', alt: 'Photo 1' },
    { url: '../../assets/dress.jpg', alt: 'Photo 2' },
    { url: '../../assets/ceremony.jpg', alt: 'Photo 3' },
    { url: '../../assets/reception.jpg', alt: 'Photo 4' },
    { url: '../../assets/kiss.jpg', alt: 'Photo 5' },
    { url: '../../assets/cake.jpg', alt: 'Photo 6' },
    { url: '../../assets/Memories.jpg', alt: 'Photo 7' },
    { url: '../../assets/Boquet.jpg', alt: 'Photo 8' },
  ];

  const handleNavigationButtonClick = (direction) => {
    if (direction === 'prev') {
      setActiveIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    } else if (direction === 'next') {
      setActiveIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }
  };

  return (
    <div>
     

      <div className="photos-component">
        <div className="photos-container">
          <div className="photo-grid" ref={photoGridRef}>
            {photos.map((photo, index) => (
              <div key={index} className={`photo-item ${activeIndex === index ? 'active' : ''}`}>
                <img src={photo.url} alt={photo.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="photos-navigation">
          <button className="prev-button" onClick={() => handleNavigationButtonClick('prev')}>
            Prev
          </button>
          <button className="next-button" onClick={() => handleNavigationButtonClick('next')}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Photos;