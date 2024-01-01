import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import anime from 'animejs/lib/anime.es.js';  // Import animejs library
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  // Animation effect using animejs
  useEffect(() => {
    anime({
      targets: '.animate-entrance',
      translateY: [20, 0],
      opacity: [0, 1],
      delay: anime.stagger(100),
    });
  }, [currentStage]);

  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 animate-entrance'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Le Vinh Khang</span>
        👋
        <br />
        A Frontend Developer from Vietnam 
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box animate-entrance'>
        <p className='font-medium sm:text-xl text-center'>
          Worked with many companies <br /> and picked up many skills along the way
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn glow'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box animate-entrance'>
        <p className='font-medium sm:text-xl text-center'>
          Need a project done or looking for a dev? <br/> I'm just a few keystrokes away
        </p>

        <Link to='/contact' className='neo-brutalism-white neo-btn glow'>
          Let's talk
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
