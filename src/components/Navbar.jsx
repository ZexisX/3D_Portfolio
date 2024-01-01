import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
<NavLink to='/' className='w-24 h-24 flex items-center justify-center'>
<div className='w-16 h-16 bg-#E9EAEA rounded-md shadow-lg flex items-center justify-center'>
      <span className='blue-gradient_text font-semibold text-xl drop-shadow'>LVK</span>
  </div>
</NavLink>

      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-white-600" : "text-black" }>
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
