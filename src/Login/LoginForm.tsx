import React from 'react';
import { Button } from '../Button/Button';

const inputBaseStyle = "w-full border rounded-xl px-4 py-3 text-center outline-none transition-colors";

export const LoginForm: React.FC = () => {
  return (
    <div className="border border-brand-purple/50 rounded-[2.5rem] p-12 bg-white w-full max-w-md shadow-[4px_4px_0px_0px_var(--color-brand-shadow-hover)] mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 tracking-widest uppercase">LOGIN</h2>
      
      <form className="space-y-6">
        {/* Campo Email */}
        <div className="space-y-2">
          <label className="font-bold ml-1">Email</label>
          <input 
            type="email" 
            placeholder="usuario@gmail.com"
            className={`${inputBaseStyle} border-secondary-bg focus:border-brand-purple`}
          />
        </div>

        {/* Campo Contraseña */}
        <div className="space-y-2">
          <label className="font-bold ml-1 text-error">Contraseña</label>
          <input 
            type="password" 
            defaultValue="password123"
            className={`${inputBaseStyle} border-danger-bg focus:border-error`}
          />
        </div>

        {/* Botón */}
        <div className="flex justify-center pt-4">
          <Button variant="primary" className="px-12">LOGIN</Button>
        </div>
      </form>
    </div>
  );
};