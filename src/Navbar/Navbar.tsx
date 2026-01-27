import { useState } from 'react';
import { Button } from '../Button/Button';

const navLinkClass = "hover:text-botones-trazo";
const hamburgerLineClass = "w-6 h-0.5 bg-black";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-botones-primario-hover backdrop-blur py-4 px-6 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold tracking-tight">Logo</div>

        {/* ===== DESKTOP (≥768px) ===== */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className={navLinkClass}>Home</a>
          <a href="#" className={navLinkClass}>Products</a>
          <a href="#" className={navLinkClass}>Contact</a>
        </div>

        <Button variant="primary" className="hidden md:block text-sm px-4 py-2" texto="Login" />

        {/* ===== MOBILE (<768px) ===== */}
        <button className="md:hidden flex flex-col gap-1" onClick={() => setIsOpen(!isOpen)}>
          <span className={hamburgerLineClass} />
          <span className={hamburgerLineClass} />
          <span className={hamburgerLineClass} />
        </button>
      </div>

      {/* ===== MOBILE MENU (<768px) ===== */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-3 mt-4 pb-4 text-sm font-medium">
          <a href="#" className={navLinkClass}>Home</a>
          <a href="#" className={navLinkClass}>Products</a>
          <a href="#" className={navLinkClass}>Contact</a>
          <Button variant="primary" className="w-full" texto="Login" />
        </div>
      )}
    </nav>
  );
}