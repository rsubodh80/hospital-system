import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
   <header className="bg-blue-400 text-white shadow-md sticky top-0 z-50">

      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">🏥 Hospital</Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm md:text-base items-center">
          <NavLink to="/" className={({ isActive }) => isActive ? 'font-semibold underline' : ''}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'font-semibold underline' : ''}>About</NavLink>
          <NavLink to="/doctors" className={({ isActive }) => isActive ? 'font-semibold underline' : ''}>Doctors</NavLink>
          <NavLink to="/departments" className={({ isActive }) => isActive ? 'font-semibold underline' : ''}>Departments</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'font-semibold underline' : ''}>Contact</NavLink>
          <NavLink
            to="/book"
            className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100 transition"
          >
            Book Appointment
          </NavLink>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {/* Hamburger icon: triple bars */}
          <div className="space-y-1">
            <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-blue-700 px-4 pb-4 space-y-3">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? 'block font-semibold underline' : 'block')}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? 'block font-semibold underline' : 'block')}
          >
            About
          </NavLink>
          <NavLink
            to="/doctors"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? 'block font-semibold underline' : 'block')}
          >
            Doctors
          </NavLink>
          <NavLink
            to="/departments"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? 'block font-semibold underline' : 'block')}
          >
            Departments
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? 'block font-semibold underline' : 'block')}
          >
            Contact
          </NavLink>
          <NavLink
            to="/book"
            onClick={() => setIsOpen(false)}
            className="block bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100 transition"
          >
            Book Appointment
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;
