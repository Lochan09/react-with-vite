import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


const sliderTrack = document.querySelector('.slider-track');
const sliderSlides = document.querySelectorAll('.slider-slide');

const prevControl = document.querySelector('.prev-control');
const nextControl = document.querySelector('.next-control');

let currentSlide = 0;

function updateSlider() {
  const translateX = -currentSlide * sliderSlides[0].offsetWidth;
  sliderTrack.style.transform = `translateX(${translateX}px)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % sliderSlides.length;
  updateSlider();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + sliderSlides.length) % sliderSlides.length;
  updateSlider();
}

nextControl.addEventListener('click', nextSlide);
prevControl.addEventListener('click', prevSlide);

updateSlider(); // Initialize slider