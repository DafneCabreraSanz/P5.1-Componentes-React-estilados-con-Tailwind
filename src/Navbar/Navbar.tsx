import React, { useState } from 'react';
import { Button } from '../Button/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 py-4 px-8 bg-primary-hover sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter">LOGO</div>
        
        {/* Menú Desktop */}
        <div className="hidden md:flex items-center gap-12 font-medium">
          <a href="#" className="text-black hover:text-brand-purple transition-colors">Home</a>
          <a href="#" className="text-black hover:text-brand-purple transition-colors">Products</a>
          <a href="#" className="text-black hover:text-brand-purple transition-colors">Contact</a>
        </div>

        {/* Hamburguesa */}
        <button 
          className="md:hidden flex flex-col gap-1.5 justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-6 h-0.5 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-black transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        <Button variant="primary" className="hidden md:block scale-90">LOGIN</Button>
      </div>

      {/* Menú Móvil */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 pb-4">
          <a href="#" className="text-black hover:text-brand-purple transition-colors font-medium">Home</a>
          <a href="#" className="text-black hover:text-brand-purple transition-colors font-medium">Products</a>
          <a href="#" className="text-black hover:text-brand-purple transition-colors font-medium">Contact</a>
          <Button variant="primary" className="w-full">LOGIN</Button>
        </div>
      )}
    </nav>
  );
};