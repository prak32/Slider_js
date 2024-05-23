import React, { useState } from 'react';
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import { MdOutlineArrowCircleRight } from "react-icons/md";

const images = [
  "https://images.unsplash.com/photo-1715604723676-7e7fb8607478?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1715845608783-e9b51eafc3f9?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1715817855875-1b786f6e25db?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const Slider = () => {
  const [ahilekoIndex, setahilekoIndex] = useState([]);

  const handleNextImage = () => {
    setahilekoIndex((puranoIndex) => (puranoIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setahilekoIndex((puraanoIndex) => (puraanoIndex - 1 + images.length) % images.length);
    
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='flex gap-4 m-6'>
        <div>
          <img src={images[ahilekoIndex]} alt={`Slide ${ahilekoIndex}`} className='h-80 w-88' />
        </div>
      </div>
      <div className='flex'>
      <div className='text-8xl m-6 flex justify-center'>
        <button><MdOutlineArrowCircleLeft onClick={handlePrevImage}/></button>
      </div>
      <div className='text-8xl m-6 flex justify-center'>
        <button><MdOutlineArrowCircleRight onClick={handleNextImage} /></button>
      </div>
      </div>
    </div>
  );
}

export default Slider;
