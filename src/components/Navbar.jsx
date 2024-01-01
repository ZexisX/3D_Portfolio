import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import anime from 'animejs/lib/anime.es.js';  // Import animejs library
import { logo } from "../assets/images";

const Navbar = () => {
  // Animation effect using animejs
  useEffect(() => {
    anime({
      targets: '.nav-link',
      translateY: [20, 0],
      opacity: [0, 1],
      delay: anime.stagger(100),
    });
  }, []);

  return (
    <header className='header'>
      <NavLink to='/' className='w-24 h-24 flex items-center justify-center'>
        <div className='w-16 h-16 bg-#E9EAEA rounded-md shadow-lg flex items-center justify-center glow'>
          <span className='blue-gradient_text font-semibold text-xl drop-shadow'>LVK</span>
        </div>
      </NavLink>

      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className='nav-link' activeClassName='text-white-600'>
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
