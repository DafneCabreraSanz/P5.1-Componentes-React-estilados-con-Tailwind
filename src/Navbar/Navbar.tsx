import React, { useState } from 'react';
import { Button } from '../Button/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white/90 backdrop-blur py-4 px-6 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold tracking-tight">Logo</div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-brand-purple">Home</a>
          <a href="#" className="hover:text-brand-purple">Products</a>
          <a href="#" className="hover:text-brand-purple">Contact</a>
        </div>

        <button
          aria-label="Abrir menú"
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-black" />
          <span className="w-6 h-0.5 bg-black" />
          <span className="w-6 h-0.5 bg-black" />
        </button>

        <Button variant="primary" className="hidden md:block text-sm px-4 py-2">Login</Button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-3 mt-4 pb-4 text-sm font-medium">
          <a href="#" className="hover:text-brand-purple">Home</a>
          <a href="#" className="hover:text-brand-purple">Products</a>
          <a href="#" className="hover:text-brand-purple">Contact</a>
          <Button variant="primary" className="w-full">Login</Button>
        </div>
      )}
    </nav>
  );
};